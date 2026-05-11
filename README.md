# CanIt

CanIt is an AI-in-practice arena concept: a futuristic, star-map inspired ranking page that visualizes how capable AI applications are across commercial industries.

## Local development

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## File layout contract

The static frontend intentionally uses the repository root files `index.html`, `style.css`, and `script.js`. Do not reintroduce `src/main.js` or `src/styles.css`; the build validation checks for those stale paths to avoid merge conflicts with the GitHub repository layout.
