# Copilot Instructions for `portfolio` (React + Vite)

## Project Overview
- This is a single-page React application bootstrapped with Vite for fast development and HMR.
- Source code is in `src/`, with main entry at `src/main.jsx` and root component in `src/App.jsx`.
- Pages are organized in `src/pages/` (`Home.jsx`, `About.jsx`, `Projects.jsx`, `Contact.jsx`).
- Static assets are in `src/assets/` and `public/` (e.g., PDF resume).

## Build & Run
- **Development:**
  - Start dev server: `npm run dev` (Vite, HMR enabled)
- **Production Build:**
  - Build: `npm run build`
  - Preview: `npm run preview`
- **Linting:**
  - Run ESLint: `npm run lint`
  - ESLint config: see `eslint.config.js`

## Key Patterns & Conventions
- **Routing:** No explicit router; navigation is likely handled via conditional rendering in `App.jsx`.
- **Styling:**
  - Global styles: `src/index.css`
  - Component/page styles: `src/App.css`, page-specific CSS if present
- **Component Structure:**
  - Each page is a separate React component in `src/pages/`
  - Main layout and navigation logic in `src/App.jsx`
- **Assets:**
  - Use `src/assets/` for images/icons, `public/` for static files (e.g., PDF)

## External Dependencies
- React, Vite, ESLint (see `package.json` for details)
- No TypeScript or advanced state management (Redux, MobX) by default

## Example Workflow
1. Add a new page: create `src/pages/Foo.jsx`, import and render in `App.jsx`
2. Add a new asset: place in `src/assets/` and import in your component
3. Update styles: edit `src/App.css` or `src/index.css`

## Tips for AI Agents
- Follow the file structure and naming conventions for new components/pages.
- Reference `App.jsx` for navigation and page integration logic.
- Use Vite's dev server for rapid feedback (`npm run dev`).
- Keep assets organized in their respective folders.
- Check `eslint.config.js` for linting rules before introducing new patterns.

---
If any conventions or workflows are unclear, ask the user for clarification or examples from their codebase.
