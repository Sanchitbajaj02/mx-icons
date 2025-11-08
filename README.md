# 🎨 MX Icons

<div align="center">
  
  ![npm version](https://img.shields.io/npm/v/mx-icons)
  ![npm downloads](https://img.shields.io/npm/dm/mx-icons)
  ![license](https://img.shields.io/github/license/ig-imanish/mx-icons)
  ![bundle size](https://img.shields.io/bundlephobia/minzip/mx-icons)

**A modern, lightweight React icon library with beautiful hand-crafted SVG icons**

Inspired by Heroicons • Built with React • Optimized for Production

[Live Demo](https://mx-icons.vercel.app/) • [Browse Icons](#-available-icons) • [Documentation](#-usage) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- 🎨 **Multiple Variants** - Every icon comes in outline, solid, and mini (16px) versions
- ⚡ **Lightweight & Fast** - Tree-shakeable, only imports what you use
- 🔧 **Fully Customizable** - Control size, color, and all SVG attributes
- 📦 **Zero Dependencies** - Only React as a peer dependency (18.x or 19.x)
- 🌐 **Social Media Ready** - Includes popular platform icons (YouTube, Instagram, Twitter, GitHub, etc.)
- 💅 **Modern Design** - Clean, professional icons optimized for light-mode interfaces
- 🚀 **Developer Friendly** - Simple API, works with Next.js, Vite, CRA
- 📱 **Responsive** - Built-in support for different sizes (24px standard, 16px mini)

## 📦 Installation

```bash
npm install mx-icons
```

```bash
yarn add mx-icons
```

```bash
pnpm add mx-icons
```

## 🚀 Quick Start

```jsx
import { HomeOutline, YouTubeOutline } from "mx-icons";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <HomeOutline />

      {/* Custom size and color */}
      <YouTubeOutline size={32} color="#FF0000" />
    </div>
  );
}
```

## 🎨 Props & Customization

All icon components accept the following props:

| Prop        | Type               | Default     | Description                                |
| ----------- | ------------------ | ----------- | ------------------------------------------ |
| `size`      | `number \| string` | `24`        | Icon width and height (px or any CSS unit) |
| `color`     | `string`           | `"#292D32"` | Icon color (any CSS color)                 |
| `className` | `string`           | `""`        | Additional CSS classes                     |

### Run Preview Locally

```bash
# Clone the repository
git clone https://github.com/ig-imanish/mx-icons.git
cd mx-icons

# Install dependencies
npm install

# Start the preview app
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🤝 Contributing

We welcome contributions! Here's how you can help make MX Icons even better:

### Ways to Contribute

- 🐛 **Report Bugs** - [Open an issue](https://github.com/ig-imanish/mx-icons/issues)
- 💡 **Request Icons** - Tell us which icons you need
- 🎨 **Add New Icons** - Follow our [contribution guidelines](https://github.com/ig-imanish/mx-icons/blob/main/CONTRIBUTING.md)
- 📖 **Improve Docs** - Help make the documentation better
- ⭐ **Star the Repo** - Show your support!
- 🐦 **Share** - Tweet about MX Icons

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-icon`
3. Make your changes
4. Test locally: `npm run dev`
5. Submit a pull request

For detailed guidelines, check out our [CONTRIBUTING.md](https://github.com/ig-imanish/mx-icons/blob/main/CONTRIBUTING.md)

## 📄 License

MIT License © 2025 [MX Icons Contributors](https://github.com/ig-imanish/mx-icons/graphs/contributors)

Free to use in personal and commercial projects. See [LICENSE](./LICENSE) for details.

## 📊 Project Stats

![Contributors](https://img.shields.io/github/contributors/ig-imanish/mx-icons)
![Last Commit](https://img.shields.io/github/last-commit/ig-imanish/mx-icons)
![Issues](https://img.shields.io/github/issues/ig-imanish/mx-icons)
![Pull Requests](https://img.shields.io/github/issues-pr/ig-imanish/mx-icons)

## 🔗 Links

- **📦 NPM Package:** [npmjs.com/package/mx-icons](https://www.npmjs.com/package/mx-icons)
- **🌐 Live Preview:** [ig-imanish.github.io/mx-icons](https://ig-imanish.github.io/mx-icons)
- **📚 Documentation:** [github.com/ig-imanish/mx-icons](https://github.com/ig-imanish/mx-icons)
- **🐛 Issues:** [github.com/ig-imanish/mx-icons/issues](https://github.com/ig-imanish/mx-icons/issues)
- **💬 Discussions:** [github.com/ig-imanish/mx-icons/discussions](https://github.com/ig-imanish/mx-icons/discussions)

<div align="center">
  
  **Made with ❤️ by the open-source community**
  
  If you find this project useful, please consider giving it a ⭐ on GitHub!
  
</div>
