
# Loi Wai Portfolio

## Overview

This is a modern, responsive portfolio website built with **React** and **Vite**. It features a clean, professional design, Neumorphism-inspired UI, and SPA navigation using React Router. The site is deployed to GitHub Pages.

## Features
 Responsive layout for mobile, tablet, and desktop
 Clean, minimalist design with professional color palette
 SPA navigation (About, Contact)
 Social links with modern icons (GitHub, LinkedIn, Facebook, Instagram)
 Easy deployment to GitHub Pages

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
git clone https://github.com/loiwai/portfolio.git
cd portfolio
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) in your browser.

### Production Build & Preview
```bash
npm run build
npm run preview
```

### Deployment
```bash
npm run deploy
```
This publishes the site to GitHub Pages using the `gh-pages` branch.

## Project Structure

- `src/`  Source code
	- `pages/`  Page components (About, Contact)
	- `assets/`  Images and icons
	- `App.jsx`  Main app component and navigation
	- `App.css`  Global styles
	- `index.css`  Additional styles
- `public/`  Static files (404.html for SPA routing)

## Customization
 Update content in `src/pages/About.jsx` and `src/pages/Contact.jsx`
 Add new pages/components in `src/pages/`
 Change colors/fonts in `App.css` and `index.css`

## License
MIT
