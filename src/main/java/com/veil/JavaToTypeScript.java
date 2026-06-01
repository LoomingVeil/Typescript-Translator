package com.veil;

import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.PackageDeclaration;
import com.github.javaparser.ast.body.*;
import com.github.javaparser.ast.comments.JavadocComment;
import com.github.javaparser.ast.type.ClassOrInterfaceType;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Things we need to fix:
 * Add native javascript functions
 * Add print()
 * Autocomplete events
 */
public class JavaToTypeScript {
    private static final Map<String, Path> classLocationMap = new HashMap<>();
    private static final Set<String> unknownTypes = new HashSet<>();
    private static Set<String> currentUnknownTypes = new HashSet<>();
    private static ArrayList<String> events = new ArrayList<>();
    private static final Map<String, String> hookMap = new LinkedHashMap<>();
    private static final File inputRoot = new File("java_src");
    private static final File outputRoot = new File("ts_src");
    private static final File srcRoot = new File("src/main/java/com/veil");
    private static final Map<String, String> globalObjects = new HashMap<>();
    private static final boolean treatGlobalVarsDifferently = true;

    static {
        // Class name, Global variable name
        globalObjects.put("AbstractNpcAPI", "API");
        globalObjects.put("AbstractExtendedAPI", "extAPI");
        globalObjects.put("AbstractShapeMaker", "ShapeMaker");
        globalObjects.put("AbstractAnimationType", "AnimationType");
        globalObjects.put("AbstractColorCodes", "Color");
        globalObjects.put("AbstractEntityType", "EntityType");
        globalObjects.put("AbstractJobType", "Job");
        globalObjects.put("AbstractRoleType", "Role");
        globalObjects.put("AbstractKeys", "Key");
        globalObjects.put("AbstractMouseButton", "MouseButton");
        globalObjects.put("AbstractParticleType", "Particle");
        globalObjects.put("AbstractItemUseAction", "UseAction");
        globalObjects.put("AbstractAttributeSection", "AttributeSection");
        globalObjects.put("AbstractAttributeValueType", "AttributeValueType");
        globalObjects.put("AbstractBlockSide", "BlockSide");
        globalObjects.put("AbstractArmorSlot", "ArmorSlot");
        globalObjects.put("AbstractItemType", "ItemType");
        globalObjects.put("AbstractEffect", "Effect");
        globalObjects.put("AbstractSkinType", "SkinType");
    }

    public static void main(String[] args) throws Exception {
        JavaParser parser = new JavaParser();
        // Map all types so that we can find relative paths later for imports
        mapAllTypes(parser, inputRoot.toPath(), outputRoot.toPath());

        // Modify parts of the source files to make the end result have fewer errors while maintaining the same functionality
        overrideFiles();

        // Tries to delete
        deleteOldSource(outputRoot);

        // Translate every file
        Files.walk(inputRoot.toPath())
                .filter(p -> p.toString().endsWith(".java"))
                .forEach(path -> processFile(parser, outputRoot, path.toFile()));

        copyTypeScriptFiles();
        createIndexFile(inputRoot.toPath());
        createEventDefinitionsFile(inputRoot.toPath());
        createHooksFile(inputRoot.toPath());

        // If all types are known, no need to continue
        if (unknownTypes.isEmpty()) return;

        // Creates a file for missing types with empty shells so that we don't get any errors
        File outFile = new File(outputRoot, "missingTypes.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(outFile))) {
            for (String type : unknownTypes) {
                writer.println("/** This interface is a shell. The real class is either defined in java or belongs to Minecraft. */");
                writer.println("export interface " + type + " {}");
            }
        } catch (IOException e) {
            System.err.println("Failed to write missingTypes.d.ts: " + e.getMessage());
        }

        System.out.println("Wrote " + unknownTypes.size() + " missing types to " + outFile.getPath());
    }

    public static void deleteOldSource(File path) {
        if (!path.exists()) return;
        Path directoryToDelete = Paths.get(path.getPath());

        try {
            Files.walkFileTree(directoryToDelete, new SimpleFileVisitor<Path>() {
                // Step 1: Delete each file you encounter
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                    Files.delete(file);
                    return FileVisitResult.CONTINUE;
                }

                // Step 2: Delete the directory itself after its contents are gone
                @Override
                public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
                    Files.delete(dir);
                    return FileVisitResult.CONTINUE;
                }
            });
            System.out.println("Folder and all its contents deleted successfully!");
        } catch (IOException e) {
            System.err.println("Failed to delete the folder: " + e.getMessage());
        }
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

        Path IItemEventFile = (new File(inputRoot+"/noppes/npcs/api/event/IItemEvent.java")).toPath();
        content = Files.readString(IItemEventFile);
        content = content.replace("IItemCustomizable", "IItemCustom");
        Files.writeString(IItemEventFile, content);

        Path IPlayerFile = (new File(inputRoot+"/noppes/npcs/api/entity/IPlayer.java")).toPath();
        content = Files.readString(IPlayerFile);
        content = content.replace("void setRotation(float rotationYaw, float rotationPitch);", "");
        Files.writeString(IPlayerFile, content);
    }

    private static void copyTypeScriptFiles() throws IOException {
        Path file;
        String content;
        File outputPath;

        file = (new File(srcRoot+"/patches/IObject.ts")).toPath();
        content = Files.readString(file);

        outputPath = new File(outputRoot+"/IObject.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(outputPath))) {
            writer.println(content);
        }

        file = (new File(srcRoot+"/patches/IJava.ts")).toPath();
        content = Files.readString(file);

        outputPath = new File(outputRoot+"/IJava.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(outputPath))) {
            writer.println(content);
        }

        file = (new File(srcRoot+"/patches/GlobalFunctions.d.ts")).toPath();
        content = Files.readString(file);

        outputPath = new File(outputRoot+"/GlobalFunctions.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(outputPath))) {
            writer.println(content);
        }
    }

    private static void createIndexFile(Path inputRoot) throws IOException {
        StringBuilder sb = new StringBuilder();
        for (String clazz : classLocationMap.keySet()) {
            Path value = classLocationMap.get(clazz);
            sb.append("type "+clazz+" = import(\""+inputRoot.relativize(value).getParent().toString().replace("\\", "/").replace("../ts_src/", "")+"/"+clazz+"\")."+clazz+";\n");
        }

        File javaOutputPath = new File(outputRoot+"/index.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(javaOutputPath))) {
            writer.println(sb);
        }
    }

    public static void createEventDefinitionsFile(Path inputRoot) throws IOException {
        Collections.sort(events);

        Node root = new Node("root");
        for (String event : events) {
            String[] parts = event.split("\\.");
            Node current = root;

            for (int i = 0; i < parts.length; i++) {
                String part = parts[i];
                boolean isLast = (i == parts.length - 1);

                current = current.children.computeIfAbsent(part, k -> new Node(part));
                if (isLast) {
                    current.isType = true;
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        for (Node topLevelNode : root.children.values()) {
            printNode(topLevelNode, 0, "", inputRoot, sb);
        }

        File javaOutputPath = new File(outputRoot+"/events.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(javaOutputPath))) {
            writer.println(sb);
        }
    }

    private static void printNode(Node node, int depth, String currentPath, Path inputRoot, StringBuilder sb) {
        String indent = "\t".repeat(depth);

        String fullDotPath = currentPath.isEmpty() ? node.name : currentPath + "." + node.name;
        String baseClass = fullDotPath.split("\\.")[0];

        Path path = classLocationMap.get(baseClass);
        String importStr = "";
        if (path != null) {
            importStr = inputRoot.relativize(path).getParent().toString().replace("\\", "/") + "/" + baseClass;
        }

        if (node.children.isEmpty()) {
            sb.append(indent).append("type ").append(node.name)
                    .append(" = import(\"").append(importStr).append("\").").append(node.name).append(";\n");
        } else {
            if (depth == 0) {
                sb.append(indent).append("declare namespace ").append(node.name).append(" {\n");
            } else {
                if (node.isType) {
                    sb.append(indent).append("type ").append(node.name)
                            .append(" = import(\"").append(importStr).append("\").").append(node.name).append(";\n");
                }
                sb.append(indent).append("namespace ").append(node.name).append(" {\n");
            }

            for (Node child : node.children.values()) {
                printNode(child, depth + 1, fullDotPath, inputRoot, sb);
            }

            sb.append(indent).append("}\n");

            if (depth == 0) {
                sb.append("\n");
            }
        }
    }

    static class Node {
        String name;
        boolean isType = false;
        Map<String, Node> children = new LinkedHashMap<>();

        Node(String name) {
            this.name = name;
        }
    }

    public static void createHooksFile(Path inputRoot) throws IOException {
        StringBuilder sb = new StringBuilder();
        sb.append("// Generated hook aliases for VS Code autocomplete in plain JS scripts.\n");
        sb.append("// These are authoring-time declarations and do not modify runtime behavior.\n");

        for (Map.Entry<String, String> entry : hookMap.entrySet()) {
            String hookName = entry.getKey();
            String eventPath = entry.getValue();

            // Extract prefix from event path (e.g., "IPlayerEvent" -> "player")
            String[] parts = eventPath.split("\\.");
            String firstPart = parts[0];
            String prefix = firstPart.substring(1).toLowerCase(); // Remove 'I' and lowercase

            // Capitalize first letter of hook name
            String capitalizedHook = hookName.substring(0, 1).toUpperCase() + hookName.substring(1);

            // Combine prefix and hook name
            String fullHookName = prefix + capitalizedHook;

            sb.append("declare function ").append(hookName).append("(event: ").append(eventPath).append("): void;\n");
        }

        File outputPath = new File(outputRoot+"/hooks.d.ts");
        try (PrintWriter writer = new PrintWriter(new FileWriter(outputPath))) {
            writer.println(sb);
        }

        System.out.println("Generated hooks.d.ts with " + hookMap.size() + " hooks");
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

        classLocationMap.put("IObject", Paths.get("ts_src/IObject.d.ts"));
        System.out.println("Mapped " + classLocationMap.size() + " types.\n");
    }

    private static void processFile(JavaParser parser, File outputRoot, File javaFile) {
        try {
            CompilationUnit cu = parser.parse(javaFile).getResult().orElseThrow();
            // Stores the string of the class up until imports are added
            StringBuilder sb = new StringBuilder();
            // All the custom types that are references. All referenced types are imported if not forbidden.
            Set<String> referencedTypes = new HashSet<>();
            // The only forbidden types are the types of the interfaces defined in the same file.
            List<String> forbiddenTypes = new ArrayList<>();

            boolean isGlobalObject = false;
            String exportStatement = "";

            for (TypeDeclaration<?> type : cu.getTypes()) {
                if (type instanceof ClassOrInterfaceDeclaration) {
                    ClassOrInterfaceDeclaration clazz = (ClassOrInterfaceDeclaration) type;

                    forbiddenTypes.add(clazz.getNameAsString());
                    processClassOrInterface(clazz, sb, referencedTypes, forbiddenTypes, null);

                    String className = clazz.getNameAsString();
                    if (globalObjects.containsKey(mapType(className)) && treatGlobalVarsDifferently) {
                        isGlobalObject = true;
                        // exportStatement = "export const " + staticTypes.get(className) + ": " + className + " = {} as " + className + ";";
                    }
                }
            }

            // ---- Write file ----
            String packagePath = cu.getPackageDeclaration()
                    .map(PackageDeclaration::getNameAsString)
                    .orElse("")
                    .replace(".", File.separator);

            File outDir = new File(outputRoot, packagePath);
            outDir.mkdirs();

            String baseName = javaFile.getName().replace(".java", ".d.ts");
            File outFile = new File(outDir, baseName);

            // ---- Build imports ----
            StringBuilder finalOutput = new StringBuilder();
            referencedTypes.removeAll(forbiddenTypes);

            if (!referencedTypes.isEmpty()) {
                finalOutput.append("\n");
            }

            finalOutput.append(sb);

            if (isGlobalObject) {
                System.out.println("Added static: " + exportStatement);
                finalOutput.append("\n" + exportStatement + "\n");
            }

            try (PrintWriter writer = new PrintWriter(new FileWriter(outFile))) {
                writer.print(finalOutput);
            }

            System.out.println("Converted: " + javaFile.getPath() + " -> " + outFile.getPath());
            currentUnknownTypes = new HashSet<>();

        } catch (Exception e) {
            currentUnknownTypes = new HashSet<>();
            System.err.println("Failed to process " + javaFile.getPath() + ": " + e.getMessage());
        }
    }

    private static void processClassOrInterface(ClassOrInterfaceDeclaration clazz, StringBuilder sb, Set<String> referencedTypes, List<String> forbiddenTypes, List<String> parentClasses) {
        boolean isGlobalObject = globalObjects.containsKey(clazz.getNameAsString());

        // ---- Extract hook name from javadoc ----
        String[] hookNameHolder = new String[1];
        clazz.getJavadocComment().ifPresent(javadoc -> {
            String javadocText = javadoc.parse().toText();
            for (String line : javadocText.split("\n")) {
                if (line.trim().startsWith("@hookName")) {
                    String[] parts = line.trim().split("\\s+");
                    if (parts.length >= 2) {
                        hookNameHolder[0] = parts[1];
                    }
                    break;
                }
            }
        });
        String hookName = hookNameHolder[0];

        // ---- Javadoc ----
        clazz.getJavadocComment().ifPresent(javadoc -> {
            String cleaned = cleanJavadoc(javadoc);
            sb.append("/**\n");
            for (String line : cleaned.split("\n")) {
                sb.append(" * ").append(line).append("\n");
            }
            sb.append(" */\n");
        });

        // Ensure extends at least IObject
        if (clazz.getExtendedTypes().isEmpty() && !isGlobalObject) {
            clazz.addExtendedType("IObject");
            referencedTypes.add("IObject");
        }

        String preStatement = "export interface "+clazz.getName();
        if (isGlobalObject) {
            preStatement = "declare namespace "+ globalObjects.get(clazz.getName().toString());
        } else if (clazz.getNameAsString().startsWith("Abstract")) {
            System.out.println("Class "+clazz.getNameAsString()+" begins with Abstract, but has no alias!");
        }

        List<String> currentPath = (parentClasses == null) ? new ArrayList<>() : new ArrayList<>(parentClasses);
        currentPath.add(clazz.getNameAsString());

        if (currentPath.stream().anyMatch(name -> name.endsWith("Event"))) {
            System.out.println("Found event type " + clazz.getNameAsString());
            // Joins the entire path: e.g., "EventGrandparent4.eventParent4.Event4"
            events.add(String.join(".", currentPath));

            // Store hook name if found
            if (hookName != null) {
                String fullEventPath = String.join(".", currentPath);
                hookMap.put(hookName, fullEventPath);
            }
        } else if (clazz.getNameAsString().startsWith("Abstract")) {
            System.out.println("Found global object "+clazz.getNameAsString());
            if (!globalObjects.containsKey(clazz.getNameAsString())) {
                System.out.println("WARNING: Abstract class " + clazz.getNameAsString() + " does not have an alias mapping in globalObjects");
            }
        }

        sb.append(preStatement)
                .append(clazz.getExtendedTypes().isNonEmpty() ? " extends " : "")
                .append(clazz.getExtendedTypes().stream()
                .map(ext -> ext.getNameAsString())
                .collect(Collectors.joining(", ")))
                .append(" {\n");

        for (ClassOrInterfaceType ref : clazz.getExtendedTypes()) {
            referencedTypes.add(mapType(ref.getNameAsString()));
        }

        // ---- Fields ----
        for (FieldDeclaration field : clazz.getFields()) {
            for (VariableDeclarator var : field.getVariables()) {
                String fieldName = var.getNameAsString();
                String fieldType = mapType(var.getType().asString());
                if (isGlobalObject) {
                    sb.append("\tvar ").append(fieldName).append(": ").append(fieldType).append(";\n");
                } else {
                    sb.append("\t").append(fieldName).append(": ").append(fieldType).append(";\n");
                }
            }
        }

        // ---- Methods ----
        for (MethodDeclaration method : clazz.getMethods()) {
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

            // Javadoc
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

            preStatement = "";
            if (isGlobalObject) {
                preStatement = "function ";
            }

            sb.append("\t").append(preStatement)
                    .append(method.getName())
                    .append("(").append(params).append("): ")
                    .append(tsType).append(";\n\n");
        }

        // ---- Check for @Cancelable annotation ----
        boolean isCancelable = clazz.getAnnotations().stream()
                .anyMatch(ann -> ann.getNameAsString().equals("Cancelable"));

        if (isCancelable) {
            sb.append("\t/** Sets whether this event is canceled. */\n");
            sb.append("\tsetCanceled(status: boolean): void;\n\n");
            sb.append("\t/** Sets whether this event is cancelled. */\n");
            sb.append("\tsetCancelled(status: boolean): void;\n\n");
        }

        sb.deleteCharAt(sb.length() - 1);

        sb.append("}\n\n");

        for (BodyDeclaration<?> member : clazz.getMembers()) {
            if (member instanceof ClassOrInterfaceDeclaration) {
                ClassOrInterfaceDeclaration inner = (ClassOrInterfaceDeclaration) member;
                forbiddenTypes.add(inner.getNameAsString());
                System.out.println("Found sub member "+inner.getNameAsString()+" for class "+clazz.getNameAsString());

                processClassOrInterface(inner, sb, referencedTypes, forbiddenTypes, currentPath);
            }
        }
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
        String baseType = baseType(nonGenericType);

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
