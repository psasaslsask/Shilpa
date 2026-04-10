# MAANJHA Storefront

React + Vite + Tailwind luxury e-commerce frontend.

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the site to GitHub Pages on every push to `main`.

### Required one-time repository settings

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` and wait for the workflow run to finish.

### Why the page previously looked empty

If Pages was configured to serve directly from the repository root, it was serving source files (React JSX) instead of the built `dist/` output. GitHub Pages needs built static assets.
