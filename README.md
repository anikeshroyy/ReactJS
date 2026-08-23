# ReactJS Practice Workspace

This workspace contains several small React learning projects built with Vite.

## Projects

- `01_first-react-app` — starter React app setup with Vite
- `02_react-component` — practice building reusable components
- `03_react-props` — props drilling and data passing between components
- `04_react-mini-project` — mini project showcasing reusable card components
- `05_css_in_react` — component styling using CSS Modules
- `06_project-using-tailwindcss` — Tailwind CSS integration examples
- `07_functions-in-react` — practicing functions and handlers in components
- `08_react-useState` — state management with `useState`
- `09_form-handling` — form input handling and submission examples
- `10_two-way-binding` — two-way data binding with React inputs
- `11_notes-app` — notes app example with add/remove functionality
- `12_react-useEffect` — effect hooks and side-effect handling with `useEffect`
- `13_gallery-app` — image gallery UI with filtering and layout examples
- `14_react-routing` — routing and navigation using React Router DOM
- `15_portfolio-project` — portfolio website project
- `16_advance-routing` — advanced routing concepts and patterns
- `17_child-to-parent` — child-to-parent data communication example
- `18_context-api` — context API state sharing example
- `19_redux-toolkit` — redux toolkit basics

## How to run a project

1. Open the subfolder for the project you want to run (for example, `01_first-react-app`).
2. From that project folder install dependencies:

```bash
npm install
```

3. Start the development server from the same folder:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

Tips:

- If you use an editor terminal, change directory to the project first, e.g. `cd 02_react-component`.
- Use a recent Node.js LTS (16+ or 18+). If you have multiple Node versions, use `nvm`/`nvm-windows` to switch.
- If a project uses Tailwind, run the normal `npm run dev` after installing — the config is included.

## Notes

- Each subfolder is a separate Vite project with its own `package.json`.
- Always run `npm install` inside the project folder before `npm run dev`.
- If ports conflict, stop other dev servers or set a different port via Vite config or `--port`.

## Quick checklist

- Open project folder
- Run `npm install`
- Run `npm run dev`
- Open the URL shown in the terminal

---
