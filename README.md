# 🏎️ F1 Data Visualization

A modern, interactive Formula 1 data visualization application built with React, TypeScript, and Tailwind CSS. Features a sleek card-based UI with smooth animations and dark/light theme support.

🔗 **Live Demo:** [https://manthan2812.github.io/f1/](https://manthan2812.github.io/f1/)

## 🚀 Tech Stack

- **Frontend Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.2.2
- **Styling:** Tailwind CSS 4.1.17
- **Icons:** Lucide React 0.561.0
- **Theme Toggle:** @theme-toggles/react 4.1.0

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manthan2812/f1.git
   cd f1
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

This project is deployed using GitHub Pages. To deploy your own version:

1. Update `vite.config.js` to include your base URL:

```js
export default defineConfig({
  base: "/f1/", // Replace with your repo name
  // ... other config
});
```

2. Install gh-pages:

```bash
npm install gh-pages --save-dev
```

3. Add deploy scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
```
