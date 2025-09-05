package com.veil;

import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.PackageDeclaration;
import com.github.javaparser.ast.body.*;
import com.github.javaparser.ast.comments.JavadocComment;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Things we need to fix:
 * Make inner classes work
 */
public class JavaToTypeScript {
    private static final Map<String, Path> classLocationMap = new HashMap<>();
    private static final Set<String> unknownTypes = new HashSet<>();
    private static Set<String> currentUnknownTypes = new HashSet<>();
    private static final File inputRoot = new File("java_src");
    private static final File outputRoot = new File("ts_src");
    private static final Map<String, String> staticTypes = new HashMap<>();

    static {
        // Class name, Global variable name
        staticTypes.put("AbstractNpcAPI", "API");
        staticTypes.put("AbstractExtendedAPI", "extAPI");
        staticTypes.put("IAnimationType", "AnimationType");
        staticTypes.put("IAttributeSection", "AttributeSection");
        staticTypes.put("IAttributeValueType", "AttributeValueType");
        staticTypes.put("IColorCode", "Color");
        staticTypes.put("IEntityType", "EntityType");
        staticTypes.put("IJobType", "Job");
        staticTypes.put("IKeys", "Key");
        staticTypes.put("IRoleType", "Role");
        staticTypes.put("IParticleType", "Particle");
        staticTypes.put("IItemUseAction", "UseAction");
        staticTypes.put("IMouseButton", "MouseButton");
    }

    public static void main(String[] args) throws Exception {
        JavaParser parser = new JavaParser();
        // Map all types so that we can find relative paths later for imports
        mapAllTypes(parser, inputRoot.toPath(), outputRoot.toPath());

        // Modify parts of the source files to make the end result more cohesive
        overrideFiles();

        // Translate ever file
        Files.walk(inputRoot.toPath())
                .filter(p -> p.toString().endsWith(".java"))
                .forEach(path -> processFile(parser, inputRoot, outputRoot, path.toFile()));

        // Create the IObject class which
        String IObjectText = "" +
                "export interface IObject {\n" +
                "    getClass(): string;\n" +
                "    toString(): string;\n" +
                "    equals(other: IObject): boolean;\n" +
                "}";

        File objOutputPath = new File(outputRoot+"/IObject.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(objOutputPath))) {
            writer.println(IObjectText);
        }

        if (unknownTypes.isEmpty()) return;

        File outFile = new File(outputRoot, "missingTypes.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(outFile))) {
            for (String type : unknownTypes) {
                writer.println("export interface " + type + " {}");
            }
        } catch (IOException e) {
            System.err.println("Failed to write missingTypes.ts: " + e.getMessage());
        }

        System.out.println("Wrote " + unknownTypes.size() + " missing types to " + outFile.getPath());
    }

    private static void overrideFiles() throws IOException {
        String content;

        Path IRoleFile = (new File(inputRoot+"/noppes/npcs/api/roles/IRole.java")).toPath();
        content = Files.readString(IRoleFile);
        content = content.replace("INpc", "ICustomNpc");
        Files.writeString(IRoleFile, content);

        Path IEntityFile = (new File(inputRoot+"/noppes/npcs/api/entity/IEntity.java")).toPath();
        content = Files.readString(IEntityFile);
        content = content.replace("T getMCEntity()", "Entity getMCEntity()");
        Files.writeString(IEntityFile, content);

        Path IEntityLivingFile = (new File(inputRoot+"/noppes/npcs/api/entity/IEntityLiving.java")).toPath();
        content = Files.readString(IEntityLivingFile);
        content = content.replace("T getMCEntity()", "Entity getMCEntity()");
        Files.writeString(IEntityLivingFile, content);

        Path IEntityLivingBaseFile = (new File(inputRoot+"/noppes/npcs/api/entity/IEntityLivingBase.java")).toPath();
        content = Files.readString(IEntityLivingBaseFile);
        content = content.replace("T getMCEntity()", "Entity getMCEntity()");
        Files.writeString(IEntityLivingBaseFile, content);
    }

    private static void mapAllTypes(JavaParser parser, Path inputRoot, Path outputRoot) throws IOException {
        Files.walk(inputRoot)
                .filter(p -> p.toString().endsWith(".java"))
                .forEach(path -> {
                    try {
                        CompilationUnit cu = parser.parse(path).getResult().orElse(null);
                        if (cu == null) return;

                        for (TypeDeclaration<?> type : cu.getTypes()) {
                            String typeName = type.getNameAsString();

                            // Compute relative path from input root
                            Path relativePath = inputRoot.relativize(path).getParent();
                            if (relativePath == null) {
                                relativePath = Paths.get(""); // top-level file
                            }

                            // Build output path (no suffix yet)
                            Path outPath = outputRoot.resolve(relativePath).resolve(typeName);

                            classLocationMap.put(typeName, outPath);
                        }
                    } catch (Exception e) {
                        System.err.println("Error mapping file: " + path + " -> " + e.getMessage());
                    }
                });

        classLocationMap.put("IObject", Paths.get("ts_src/IObject.ts"));
        System.out.println("Mapped " + classLocationMap.size() + " types.\n");
    }

    private static List<String> processFile(JavaParser parser, File inputRoot, File outputRoot, File javaFile) {
        try {
            CompilationUnit cu = parser.parse(javaFile).getResult().orElseThrow();
            StringBuilder sb = new StringBuilder();
            List<String> types = new ArrayList<>();
            Set<String> referencedTypes = new HashSet<>();

            boolean isStatic = false;
            String exportStatement = "";

            for (TypeDeclaration<?> type : cu.getTypes()) {
                types.add(type.getNameAsString());
                if (type instanceof ClassOrInterfaceDeclaration clazz) {
                    // Collect extended types
                    clazz.getExtendedTypes().forEach(ext -> referencedTypes.add(ext.getNameAsString()));

                    // ---- Class Javadoc ----
                    clazz.getJavadocComment().ifPresent(javadoc -> {
                        String cleaned = cleanJavadoc(javadoc);
                        sb.append("/**\n");
                        for (String line : cleaned.split("\n")) {
                            sb.append(" * ").append(line).append("\n");
                        }
                        sb.append(" */\n");
                    });

                    String className = clazz.getNameAsString();
                    if (staticTypes.containsKey(mapType(className))) {
                        isStatic = true;
                        exportStatement = "export const "+staticTypes.get(className)+": "+className+" = {} as "+className+";";
                    }

                    if (clazz.getExtendedTypes().isEmpty()) {
                        clazz.addExtendedType("IObject");
                        referencedTypes.add("IObject");
                    }

                    sb.append(isStatic ? "" : "export ")
                            .append("interface ").append(clazz.getName())
                            .append(clazz.getExtendedTypes().isNonEmpty() ? " extends " : "")
                            .append(clazz.getExtendedTypes().stream()
                                    .map(ext -> ext.getNameAsString())
                                    .collect(Collectors.joining(", ")))
                            .append(" {\n");

                    // Print all fields
                    for (FieldDeclaration field : clazz.getFields()) {
                        for (VariableDeclarator var : field.getVariables()) {
                            String fieldName = var.getNameAsString();
                            String fieldType = mapType(var.getType().asString());

                            if (clazz.isInterface()) {
                                sb.append("\t").append(fieldName).append(": ").append(fieldType).append(";\n");
                            } else {
                                sb.append("\t").append(fieldName).append(": ").append(fieldType).append(";\n");
                            }
                        }
                    }
                    sb.append("\n");

                    // Print all the methods
                    for (MethodDeclaration method : clazz.getMethods()) {
                        // Collect return + param types
                        String returnType = method.getType().asString();
                        if (!baseType(returnType).equals(clazz.getNameAsString())) {
                            referencedTypes.add(baseType(returnType));
                        }

                        method.getParameters().forEach(p -> {
                            String paramType = p.getType().asString();
                            if (!baseType(paramType).equals(clazz.getNameAsString())) {
                                referencedTypes.add(baseType(paramType));
                            }
                        });

                        // ---- Method Javadoc ----
                        method.getJavadocComment().ifPresent(javadoc -> {
                            String cleaned = cleanJavadoc(javadoc);
                            sb.append("\t/**\n");
                            for (String line : cleaned.split("\n")) {
                                sb.append("\t * ").append(line).append("\n");
                            }
                            sb.append("\t */\n");
                        });

                        String tsType = mapType(method.getType().asString());
                        String params = method.getParameters().stream()
                                .map(p -> p.getName() + ": " + mapType(p.getType().asString()))
                                .collect(Collectors.joining(", "));

                        sb.append("\t").append(method.getName())
                                .append("(").append(params).append("): ")
                                .append(tsType).append(";\n\n");
                    }
                }

                sb.append("}\n");
            }

            // ---- Write file ----
            String packagePath = cu.getPackageDeclaration()
                    .map(PackageDeclaration::getNameAsString)
                    .orElse("")
                    .replace(".", File.separator);

            File outDir = new File(outputRoot, packagePath);
            outDir.mkdirs();

            String baseName = javaFile.getName().replace(".java", ".ts");
            File outFile = new File(outDir, baseName);

            // ---- Build imports ----
            StringBuilder finalOutput = new StringBuilder();
            Path currentDir = outFile.getParentFile().toPath();

            for (String ref : referencedTypes) {
                Path target = classLocationMap.get(ref);
                if (target != null && !target.equals(outFile.toPath())) {
                    Path rel = currentDir.relativize(target);
                    String importPath = rel.toString().replace(File.separator, "/");
                    finalOutput.append("import { ").append(ref).append(" } from \"./")
                            .append(importPath.replace(".ts", "")).append("\";\n");
                }
            }

            finalOutput.append("\n");

            Path missingTypesFile = outputRoot.toPath().resolve("missingTypes.ts");

            for (String ref : currentUnknownTypes) {
                Path rel = currentDir.relativize(missingTypesFile);
                String importPath = rel.toString().replace(File.separator, "/");
                finalOutput.append("import { ").append(ref).append(" } from \"./")
                        .append(importPath.replace(".ts", "")).append("\";\n");
            }

            if (!referencedTypes.isEmpty()) {
                finalOutput.append("\n");
            }

            finalOutput.append(sb);

            if (isStatic) {
                System.out.println("Added static: "+exportStatement);
                finalOutput.append("\n"+exportStatement+"\n");
            }

            try (PrintWriter writer = new PrintWriter(new FileWriter(outFile))) {
                writer.print(finalOutput.toString());
            }

            System.out.println("Converted: " + javaFile.getPath() + " -> " + outFile.getPath());
            currentUnknownTypes = new HashSet<>();

            return types;
        } catch (Exception e) {
            currentUnknownTypes = new HashSet<>();
            System.err.println("Failed to process " + javaFile.getPath() + ": " + e.getMessage());
        }

        return null;
    }

    private static String baseType(String javaType) {
        return javaType.replaceAll("<.*>", "") // strip generics
                .replace("[]", "")       // strip arrays
                .substring(javaType.lastIndexOf('.') + 1); // strip package
    }

    private static String mapType(String javaType) {
        boolean isArray = javaType.endsWith("[]");

        // Remove generics like <T>, <K,V>, etc.
        String nonGenericType = javaType.replaceAll("<.*>", "");
        // Strip [] for base type detection
        String baseType = nonGenericType.replace("[]", "");

        // --- Handle generic placeholders (T, E, K, V, single letters) ---
        if (baseType.matches("^[A-Z]$")) {
            return javaType; // leave as-is
        }

        // --- Primitive & wrapper mapping ---
        Map<String, String> primitiveMap = Map.ofEntries(
                Map.entry("byte", "number"),
                Map.entry("short", "number"),
                Map.entry("int", "number"),
                Map.entry("long", "number"),
                Map.entry("float", "number"),
                Map.entry("double", "number"),
                Map.entry("char", "string"),
                Map.entry("boolean", "boolean"),
                Map.entry("void", "void")
        );

        Map<String, String> wrapperMap = Map.ofEntries(
                Map.entry("Byte", "number"),
                Map.entry("Short", "number"),
                Map.entry("Integer", "number"),
                Map.entry("Long", "number"),
                Map.entry("Float", "number"),
                Map.entry("Double", "number"),
                Map.entry("Character", "string"),
                Map.entry("Boolean", "boolean"),
                Map.entry("String", "string"),
                Map.entry("Object", "any")
                // IObject is a decent alternative, but any prevents all errors
        );

        String mapped = primitiveMap.get(baseType);
        if (mapped == null) {
            mapped = wrapperMap.get(baseType);
        }

        if (mapped != null) {
            return isArray ? mapped + "[]" : mapped;
        }

        // --- Custom type handling ---
        if (!classLocationMap.containsKey(baseType)) {
            if (!currentUnknownTypes.contains(baseType)) {
                System.out.println("Unknown Type: " + baseType);
            }
            unknownTypes.add(baseType);
            currentUnknownTypes.add(baseType);
        }

        return isArray ? baseType + "[]" : baseType;
    }

    private static String cleanJavadoc(JavadocComment javadoc) {
        String text = javadoc.parse().toText();
        List<String> lines = Arrays.asList(text.split("\n"));

        // Remove leading/trailing empty lines
        int start = 0;
        int end = lines.size();
        while (start < end && lines.get(start).trim().isEmpty()) start++;
        while (end > start && lines.get(end - 1).trim().isEmpty()) end--;

        return String.join("\n", lines.subList(start, end));
    }
}
