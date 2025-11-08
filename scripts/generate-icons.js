import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * SVG to React Component Generator
 * Converts all SVG files in icons/All/* to React components
 */

const VARIANTS = ["bold", "broken", "bulk", "linear", "outline", "twotone"];
const ICONS_DIR = path.join(__dirname, "..", "src", "icons");
const ALL_DIR = path.join(ICONS_DIR, "All");
const COMPONENTS_DIR = path.join(ICONS_DIR, "components");

function toPascalCase(str) {
  let result = str
    .replace(/&/g, "And") // Replace & with And
    .replace(/[^a-zA-Z0-9-_\s]/g, "") // Remove other special characters
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (_, c) => c.toUpperCase())
    .replace(/[0-9]+(.)?/g, (match, c) => match + (c ? c.toUpperCase() : ""));

  // If starts with a number, prefix with 'Icon'
  if (/^\d/.test(result)) {
    result = "Icon" + result;
  }

  return result;
}

function toKebabCase(str) {
  let result = str
    .replace(/&/g, "and") // Replace & with and
    .replace(/[^a-zA-Z0-9-_\s]/g, "") // Remove other special characters
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

  // If starts with a number, prefix with 'icon-'
  if (/^\d/.test(result)) {
    result = "icon-" + result;
  }

  return result;
}

function extractSVGContent(svgString) {
  // Remove the opening <svg> and closing </svg> tags
  const match = svgString.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!match) {
    throw new Error("Invalid SVG format");
  }

  let content = match[1].trim();

  // Replace fill and stroke attributes to use props
  content = content.replace(/fill="[^"]*"/g, 'fill="currentColor"');
  content = content.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');

  // Convert kebab-case attributes to camelCase for React
  content = content.replace(/stroke-width=/g, "strokeWidth=");
  content = content.replace(/stroke-linecap=/g, "strokeLinecap=");
  content = content.replace(/stroke-linejoin=/g, "strokeLinejoin=");
  content = content.replace(/stroke-miterlimit=/g, "strokeMiterlimit=");
  content = content.replace(/stroke-dasharray=/g, "strokeDasharray=");
  content = content.replace(/stroke-dashoffset=/g, "strokeDashoffset=");
  content = content.replace(/fill-rule=/g, "fillRule=");
  content = content.replace(/clip-rule=/g, "clipRule=");
  content = content.replace(/fill-opacity=/g, "fillOpacity=");
  content = content.replace(/stroke-opacity=/g, "strokeOpacity=");

  return content;
}

function generateComponent(iconName, variant, svgContent) {
  const componentName = toPascalCase(iconName) + toPascalCase(variant);
  const isBold = variant === "bold";
  const isBulk = variant === "bulk";

  // For bold/bulk variants, use fill. For others, use stroke
  const defaultFill = isBold || isBulk ? "currentColor" : "none";

  return `import React from "react";
import Icon from "../../Icon";

export default function ${componentName}({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="${defaultFill}"
      className={className}
      {...props}
    >
      ${svgContent}
    </Icon>
  );
}
`;
}

function createIconComponent(variant, svgFile) {
  const svgPath = path.join(ALL_DIR, variant, svgFile);
  const svgContent = fs.readFileSync(svgPath, "utf-8");

  try {
    const iconName = path.basename(svgFile, ".svg");

    // Skip 'icon.svg' to avoid conflict with base Icon component
    if (iconName.toLowerCase() === "icon") {
      console.log(
        `⚠️  Skipping ${svgFile} (${variant}) - conflicts with base Icon component`
      );
      return null;
    }

    const content = extractSVGContent(svgContent);
    const component = generateComponent(iconName, variant, content);

    // Create component directory
    const iconDir = path.join(COMPONENTS_DIR, toKebabCase(iconName));
    if (!fs.existsSync(iconDir)) {
      fs.mkdirSync(iconDir, { recursive: true });
    }

    // Write component file
    const componentName = toPascalCase(iconName) + toPascalCase(variant);
    const componentPath = path.join(iconDir, `${componentName}.jsx`);
    fs.writeFileSync(componentPath, component);

    return {
      iconName,
      variant,
      componentName,
      slug: toKebabCase(iconName),
    };
  } catch (error) {
    console.error(`Error processing ${svgFile} (${variant}):`, error.message);
    return null;
  }
}

function generateIconIndex(iconName, variants) {
  const pascalName = toPascalCase(iconName);
  const kebabName = toKebabCase(iconName);

  const imports = variants
    .map(
      (v) =>
        `import ${pascalName}${toPascalCase(
          v
        )} from "./${pascalName}${toPascalCase(v)}";`
    )
    .join("\n");

  const exports = `export { ${variants
    .map((v) => `${pascalName}${toPascalCase(v)}`)
    .join(", ")} };`;

  const variantsArray = variants
    .map(
      (v) => `  {
    variant: "${v}",
    slug: "${kebabName}-${v}",
    Component: ${pascalName}${toPascalCase(v)},
    componentName: "${pascalName}${toPascalCase(v)}",
  }`
    )
    .join(",\n");

  const defaultExport = `export default { ${variants
    .map((v) => `${pascalName}${toPascalCase(v)}`)
    .join(", ")} };`;

  return `${imports}

${exports}

export const variants = [
${variantsArray}
];

${defaultExport}
`;
}

function generateMainIndex(iconGroups) {
  // Generate imports for all variants
  const imports = [];
  const iconEntries = [];

  iconGroups.forEach((group) => {
    const pascalName = toPascalCase(group.name);
    imports.push(
      `import { variants as variants${pascalName} } from "./components/${group.slug}";`
    );

    // Add individual component exports
    group.variants.forEach((v) => {
      imports.push(
        `import { ${pascalName}${toPascalCase(v)} } from "./components/${
          group.slug
        }";`
      );
    });

    iconEntries.push(`  {
    name: "${group.name}",
    slug: "${group.slug}",
    variants: variants${pascalName},
  }`);
  });

  const componentExports = iconGroups
    .flatMap((group) =>
      group.variants.map(
        (v) => `  ${toPascalCase(group.name)}${toPascalCase(v)},`
      )
    )
    .join("\n");

  return `// Auto-generated icon library
import Icon from "./Icon";

${imports.join("\n")}

export { Icon };

export {
${componentExports}
};

export const icons = [
${iconEntries.join(",\n")}
];
`;
}

async function main() {
  console.log("\n🎨 Generating React components from SVG files...\n");

  // Create components directory
  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
  }

  const iconMap = new Map();
  let totalGenerated = 0;

  // Process each variant
  for (const variant of VARIANTS) {
    const variantDir = path.join(ALL_DIR, variant);

    if (!fs.existsSync(variantDir)) {
      console.log(`⚠️  Skipping ${variant} - directory not found`);
      continue;
    }

    const svgFiles = fs
      .readdirSync(variantDir)
      .filter((f) => f.endsWith(".svg"));
    console.log(`📁 Processing ${variant}: ${svgFiles.length} icons`);

    for (const svgFile of svgFiles) {
      const result = createIconComponent(variant, svgFile);

      if (result) {
        const { iconName, variant: v } = result;

        if (!iconMap.has(iconName)) {
          iconMap.set(iconName, []);
        }
        iconMap.get(iconName).push(v);
        totalGenerated++;
      }
    }
  }

  // Generate index files for each icon
  console.log("\n📝 Generating index files...");
  const iconGroups = [];

  for (const [iconName, variants] of iconMap.entries()) {
    const iconDir = path.join(COMPONENTS_DIR, toKebabCase(iconName));
    const indexContent = generateIconIndex(iconName, variants);
    const indexPath = path.join(iconDir, "index.js");
    fs.writeFileSync(indexPath, indexContent);

    iconGroups.push({
      name: iconName,
      slug: toKebabCase(iconName),
      variants,
    });
  }

  // Generate main index
  console.log("📝 Generating main index.js...");
  const mainIndexContent = generateMainIndex(iconGroups);
  const mainIndexPath = path.join(ICONS_DIR, "index.js");
  fs.writeFileSync(mainIndexPath, mainIndexContent);

  console.log(
    `\n✅ Generated ${totalGenerated} components for ${iconMap.size} icons!`
  );
  console.log(`📦 Icon variants: ${VARIANTS.join(", ")}`);
  console.log(`\n💡 Import example:`);
  console.log(
    `   import { HomeBold, HomeLinear, HomeOutline } from './icons';\n`
  );
}

main().catch(console.error);
