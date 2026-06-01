const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const TRANSLATOR_ROOT = path.join(ROOT, "Typescript Translator", "ts_src");
const AUTHORING_ROOT = path.join(ROOT, "authoring-types");
const LEGACY_HOOKS_PATH = path.join(ROOT, "src", "hooks.d.ts");
const SNIPPETS_PATH = path.join(ROOT, ".vscode", "customnpcs.code-snippets");
const AUDIT_PATH = path.join(AUTHORING_ROOT, "audit-report.json");

const DUPLICATE_ALIAS_MAP = {
  "noppes/npcs/api/ability/IAbilityHandler.d.ts": "IAbilityTypeHandler",
  "noppes/npcs/api/handler/IAbilityHandler.d.ts": "IAbilityHandler",
  "noppes/npcs/api/gui/ILine.d.ts": "IGuiLine",
  "noppes/npcs/api/handler/data/ILine.d.ts": "ILine"
};

const SKIPPED_MISSING_GLOBALS = new Set([
  "BiConsumer",
  "Class",
  "Collection",
  "Consumer",
  "File",
  "Function",
  "HashMap",
  "ImmutableMap",
  "Iterable",
  "List",
  "Logger",
  "Map",
  "Queue"
]);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".d.ts")) {
      files.push(fullPath);
    }
  }
  return files;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function relativeModulePath(filePath) {
  const relative = toPosix(path.relative(TRANSLATOR_ROOT, filePath)).replace(/\.d\.ts$/, "");
  return `../Typescript Translator/ts_src/${relative}`;
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseExportedDeclarations(filePath, text) {
  const declarations = [];
  const exportRegex = /^export\s+(interface|class|type|namespace)\s+([A-Za-z_][A-Za-z0-9_]*)/gm;
  let match;
  while ((match = exportRegex.exec(text)) !== null) {
    declarations.push({
      kind: match[1],
      name: match[2],
      filePath
    });
  }
  return declarations;
}

function extractNamespaceBlocks(text) {
  const blocks = [];
  const namespaceRegex = /declare namespace ([A-Za-z_][A-Za-z0-9_]*) \{/g;
  let match;

  while ((match = namespaceRegex.exec(text)) !== null) {
    const namespaceName = match[1];
    const startIndex = match.index;
    let braceDepth = 0;
    let endIndex = -1;

    for (let i = startIndex; i < text.length; i += 1) {
      const ch = text[i];
      if (ch === "{") {
        braceDepth += 1;
      } else if (ch === "}") {
        braceDepth -= 1;
        if (braceDepth === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }

    if (endIndex !== -1) {
      blocks.push({
        namespaceName,
        block: text.slice(startIndex, endIndex)
      });
      namespaceRegex.lastIndex = endIndex;
    }
  }

  return blocks;
}

function parseLegacyHooks() {
  if (!fs.existsSync(LEGACY_HOOKS_PATH)) {
    return new Map();
  }

  const legacyText = read(LEGACY_HOOKS_PATH);
  const lines = legacyText.split(/\r?\n/);
  const hookMap = new Map();
  let currentNamespace = "";

  for (const line of lines) {
    const namespaceMatch = line.match(/^declare namespace ([A-Za-z_][A-Za-z0-9_]*) \{/);
    if (namespaceMatch) {
      currentNamespace = namespaceMatch[1];
      continue;
    }

    const functionMatch = line.match(/^\s*function\s+([A-Za-z_][A-Za-z0-9_]*)\(event:\s*([A-Za-z0-9_.]+)\):\s*void;/);
    if (functionMatch) {
      hookMap.set(functionMatch[2], functionMatch[1]);
      if (currentNamespace && !functionMatch[2].startsWith(currentNamespace + ".")) {
        hookMap.set(`${currentNamespace}.${functionMatch[2].split(".").slice(1).join(".")}`, functionMatch[1]);
      }
    }
  }

  return hookMap;
}

function lowerCamel(text) {
  if (!text) {
    return text;
  }
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function rootPrefixForEvent(rootName) {
  return lowerCamel(rootName.replace(/^I/, "").replace(/Event$/, ""));
}

function toAuthoringHookName(rootName, rawHookName) {
  const prefix = rootPrefixForEvent(rootName);
  const lowerRaw = lowerCamel(rawHookName);
  if (lowerRaw.startsWith(prefix)) {
    return rawHookName;
  }
  return prefix + rawHookName.charAt(0).toUpperCase() + rawHookName.slice(1);
}

function parseEventFile(filePath, text, legacyHooks) {
  const basename = path.basename(filePath, ".d.ts");
  const declarations = [];
  const lines = text.split(/\r?\n/);
  let pendingHookName = null;

  for (const line of lines) {
    const hookMatch = line.match(/@hookName\s+([A-Za-z_][A-Za-z0-9_]*)/);
    if (hookMatch) {
      pendingHookName = hookMatch[1];
    }

    const exportMatch = line.match(/^export interface ([A-Za-z_][A-Za-z0-9_]*)(?: extends ([^{]+))? \{/);
    if (exportMatch) {
      const extendsName = exportMatch[2]
        ? (exportMatch[2].match(/[A-Za-z_][A-Za-z0-9_]*/) || [null])[0]
        : null;
      declarations.push({
        name: exportMatch[1],
        extendsName,
        hookName: pendingHookName,
        filePath
      });
      pendingHookName = null;
    }
  }

  const exportedNames = new Set(declarations.map((declaration) => declaration.name));
  const byName = new Map();
  for (const declaration of declarations) {
    if (!byName.has(declaration.name)) {
      byName.set(declaration.name, []);
    }
    byName.get(declaration.name).push(declaration);
  }

  const rootDeclaration = declarations.find((declaration) => declaration.name === basename);
  if (!rootDeclaration) {
    return null;
  }

  const rootName = rootDeclaration.name;
  const rootChildren = [];

  for (const declaration of declarations) {
    if (declaration === rootDeclaration) {
      declaration.parentName = null;
      declaration.typePath = rootName;
      continue;
    }

    declaration.parentName = exportedNames.has(declaration.extendsName) ? declaration.extendsName : rootName;
    if (!rootChildren.includes(declaration.parentName)) {
      rootChildren.push(declaration.parentName);
    }
  }

  function assignTypePath(parentName, parentPath) {
    for (const declaration of declarations.filter((entry) => entry.parentName === parentName)) {
      declaration.typePath = `${parentPath}.${declaration.name}`;
      assignTypePath(declaration.name, declaration.typePath);
    }
  }

  assignTypePath(rootName, rootName);

  for (const declaration of declarations) {
    if (!declaration.hookName && declaration !== rootDeclaration) {
      declaration.hookName = legacyHooks.get(declaration.typePath) || null;
    }
    if (declaration.hookName) {
      declaration.authoringHookName = toAuthoringHookName(rootName, declaration.hookName);
    }
  }

  return {
    rootName,
    filePath,
    declarations
  };
}

function buildEventNamespace(meta) {
  const importPath = relativeModulePath(meta.filePath);
  const childrenByParent = new Map();

  for (const declaration of meta.declarations) {
    if (!declaration.parentName) {
      continue;
    }
    if (!childrenByParent.has(declaration.parentName)) {
      childrenByParent.set(declaration.parentName, []);
    }
    childrenByParent.get(declaration.parentName).push(declaration);
  }

  function emitChildren(parentName, indentLevel) {
    const lines = [];
    const children = childrenByParent.get(parentName) || [];

    for (const child of children) {
      const indent = "    ".repeat(indentLevel);
      lines.push(`${indent}type ${child.name} = import("${importPath}").${child.name};`);
      if (childrenByParent.has(child.name)) {
        lines.push(`${indent}namespace ${child.name} {`);
        lines.push(...emitChildren(child.name, indentLevel + 1));
        lines.push(`${indent}}`);
      }
    }

    return lines;
  }

  return [
    `declare namespace ${meta.rootName} {`,
    ...emitChildren(meta.rootName, 1),
    "}"
  ].join("\n");
}

function buildHookEntries(eventMetas) {
  const hooks = [];
  for (const meta of eventMetas) {
    for (const declaration of meta.declarations) {
      if (!declaration.authoringHookName) {
        continue;
      }
      hooks.push({
        functionName: declaration.authoringHookName,
        typePath: declaration.typePath
      });
    }
  }

  hooks.sort((a, b) => a.functionName.localeCompare(b.functionName));
  return hooks;
}

function buildGlobalTypes(uniqueRootExports, duplicateBasenames) {
  const eventRootNames = new Set(
    uniqueRootExports
      .filter((item) => toPosix(item.filePath).includes("/noppes/npcs/api/event/"))
      .map((item) => item.aliasName)
  );

  const lines = [
    "// Generated from Typescript Translator/ts_src for plain ES5 JSDoc authoring.",
    "// Do not edit manually."
  ];

  for (const item of uniqueRootExports) {
    const importPath = relativeModulePath(item.filePath);
    if (item.kind === "interface" && eventRootNames.has(item.aliasName)) {
      lines.push(`type __${item.aliasName}Base = import("${importPath}").${item.exportName};`);
      lines.push(`interface ${item.aliasName} extends __${item.aliasName}Base {}`);
    } else {
      lines.push(`type ${item.aliasName} = import("${importPath}").${item.exportName};`);
    }
  }

  lines.push("type AbstractNpcAPI = typeof API;");

  if (duplicateBasenames.length > 0) {
    lines.push("");
    lines.push("// Duplicate basenames intentionally receive path-specific aliases.");
  }

  return lines.join("\n") + "\n";
}

function buildRuntimeGlobals(namespaceBlocks) {
  const lines = [
    "// Generated from translator static/global namespaces.",
    "// Do not edit manually."
  ];

  for (const item of namespaceBlocks) {
    let block = item.block.trim();
    if (item.namespaceName === "API") {
      block = block.replace(/var instance:\s*AbstractNpcAPI;/, "var instance: typeof API;");
    }
    lines.push(block);
  }

  return lines.join("\n\n") + "\n";
}

function buildHookGlobals(hooks) {
  const lines = [
    "// Generated hook aliases for VS Code autocomplete in plain JS scripts.",
    "// These are authoring-time declarations and do not modify runtime behavior."
  ];

  for (const hook of hooks) {
    lines.push(`declare function ${hook.functionName}(event: ${hook.typePath}): void;`);
  }

  return lines.join("\n") + "\n";
}

function buildMissingTypesGlobals(missingTypesPath, exportedDeclarations, existingAliases) {
  const lines = [
    "// Selected shell types promoted from missingTypes.d.ts.",
    "// Builtin-like names are intentionally not exposed as globals."
  ];

  const importPath = relativeModulePath(missingTypesPath);
  const promoted = [];
  const skipped = [];

  for (const declaration of exportedDeclarations) {
    if (SKIPPED_MISSING_GLOBALS.has(declaration.name) || existingAliases.has(declaration.name)) {
      skipped.push(declaration.name);
      continue;
    }
    promoted.push(declaration.name);
    lines.push(`type ${declaration.name} = import("${importPath}").${declaration.name};`);
  }

  return {
    text: lines.join("\n") + "\n",
    promoted,
    skipped
  };
}

function buildSnippets(hooks) {
  const snippets = {};

  for (const hook of hooks) {
    snippets[hook.functionName] = {
      prefix: [hook.functionName, `function ${hook.functionName}`],
      body: [
        `/** @param {${hook.typePath}} event */`,
        `function ${hook.functionName}(event) {`,
        "\t$0",
        "}"
      ],
      description: `CustomNPC+ hook for ${hook.typePath}`
    };
  }

  return JSON.stringify(snippets, null, 2) + "\n";
}

function buildAuditReport(data) {
  return JSON.stringify(data, null, 2) + "\n";
}

function main() {
  ensureDir(AUTHORING_ROOT);
  ensureDir(path.dirname(SNIPPETS_PATH));

  const legacyHooks = parseLegacyHooks();
  const files = walk(TRANSLATOR_ROOT);
  const allDeclarations = [];
  const namespaceBlocks = [];
  const eventMetas = [];

  for (const filePath of files) {
    const text = read(filePath);
    const declarations = parseExportedDeclarations(filePath, text);
    allDeclarations.push(...declarations);
    namespaceBlocks.push(...extractNamespaceBlocks(text).map((item) => ({ ...item, filePath })));

    if (toPosix(filePath).includes("/noppes/npcs/api/event/")) {
      const eventMeta = parseEventFile(filePath, text, legacyHooks);
      if (eventMeta) {
        eventMetas.push(eventMeta);
      }
    }
  }

  const basenameCounts = new Map();
  for (const filePath of files) {
    const basename = path.basename(filePath);
    basenameCounts.set(basename, (basenameCounts.get(basename) || 0) + 1);
  }

  const uniqueRootExports = [];
  const usedAliases = new Set();
  const duplicateBasenames = [];

  for (const filePath of files) {
    const basename = path.basename(filePath);
    const relativeFilePath = toPosix(path.relative(TRANSLATOR_ROOT, filePath));
    const declarations = allDeclarations.filter((item) => item.filePath === filePath);
    const rootName = path.basename(filePath, ".d.ts");
    const rootDeclaration = declarations.find((item) => item.name === rootName);
    if (!rootDeclaration) {
      continue;
    }

    if ((basenameCounts.get(basename) || 0) > 1) {
      const aliasName = DUPLICATE_ALIAS_MAP[relativeFilePath];
      if (aliasName) {
        uniqueRootExports.push({
          aliasName,
          exportName: rootDeclaration.name,
          kind: rootDeclaration.kind,
          filePath
        });
        usedAliases.add(aliasName);
      }
      duplicateBasenames.push(relativeFilePath);
      continue;
    }

    uniqueRootExports.push({
      aliasName: rootDeclaration.name,
      exportName: rootDeclaration.name,
      kind: rootDeclaration.kind,
      filePath
    });
    usedAliases.add(rootDeclaration.name);
  }

  uniqueRootExports.sort((a, b) => a.aliasName.localeCompare(b.aliasName));

  const eventNamespaceText = eventMetas
    .sort((a, b) => a.rootName.localeCompare(b.rootName))
    .map(buildEventNamespace)
    .join("\n\n") + "\n";

  const hooks = buildHookEntries(eventMetas);
  const snippetText = buildSnippets(hooks);

  const missingTypesPath = path.join(TRANSLATOR_ROOT, "missingTypes.d.ts");
  const missingTypeDeclarations = parseExportedDeclarations(missingTypesPath, read(missingTypesPath));
  const missingTypesGlobals = buildMissingTypesGlobals(missingTypesPath, missingTypeDeclarations, usedAliases);

  const auditData = {
    generatedAt: new Date().toISOString(),
    translatorRoot: toPosix(path.relative(ROOT, TRANSLATOR_ROOT)),
    authoringRoot: toPosix(path.relative(ROOT, AUTHORING_ROOT)),
    eventFiles: eventMetas.length,
    authoringHooks: hooks.length,
    staticNamespaces: namespaceBlocks.map((item) => ({
      namespace: item.namespaceName,
      file: toPosix(path.relative(TRANSLATOR_ROOT, item.filePath))
    })),
    duplicateBasenames,
    missingTypes: {
      promotedGlobals: missingTypesGlobals.promoted,
      skippedGlobals: missingTypesGlobals.skipped
    },
    unresolvedHookTags: eventMetas.flatMap((meta) =>
      meta.declarations
        .filter((entry) => entry !== meta.declarations[0] && !entry.authoringHookName)
        .map((entry) => ({
          file: toPosix(path.relative(TRANSLATOR_ROOT, meta.filePath)),
          typePath: entry.typePath
        }))
    )
  };

  fs.writeFileSync(path.join(AUTHORING_ROOT, "global-types.d.ts"), buildGlobalTypes(uniqueRootExports, duplicateBasenames));
  fs.writeFileSync(path.join(AUTHORING_ROOT, "event-namespaces.d.ts"), eventNamespaceText);
  fs.writeFileSync(path.join(AUTHORING_ROOT, "runtime-globals.d.ts"), buildRuntimeGlobals(namespaceBlocks));
  fs.writeFileSync(path.join(AUTHORING_ROOT, "hook-globals.d.ts"), buildHookGlobals(hooks));
  fs.writeFileSync(path.join(AUTHORING_ROOT, "missing-types-global.d.ts"), missingTypesGlobals.text);
  fs.writeFileSync(AUDIT_PATH, buildAuditReport(auditData));
  fs.writeFileSync(SNIPPETS_PATH, snippetText);
}

main();
