# Academic & Research Portfolio – Heba Anis

Academic and research portfolio for **Heba Anis** (MSc Candidate at the National Institute of Laser Sciences (NILES), Cairo University, and Research Associate at the Energy Materials Lab, The American University in Cairo).

---

## 🚀 100% Static Deployment to GitHub Pages

This project is built using **React, Vite, and Tailwind CSS** and is configured as a fully static Single Page Application (SPA). It uses relative path resolution (`base: './'`) so it works automatically on any subpath (e.g., `https://<your-username>.github.io/<repository-name>/`).

### Automated Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub (to the `main` or `master` branch).
2. On GitHub, navigate to:
   **Repository Settings** &rarr; **Pages**
3. Under **Build and deployment > Source**, select:
   **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will automatically build the site with `npm run build` and publish it to GitHub Pages whenever you push changes.

---

## 📷 Profile Photo

To show your actual photo on the website:
1. Place or replace your photo file at:
   ```
   public/IMG-20260912-WA0033.jpg
   ```
2. When building (`npm run build`), Vite automatically copies all files from `public/` into `dist/`.
3. If the photo file hasn't been added yet, the site automatically renders an elegant academic vector silhouette fallback (`public/profile-fallback.svg`) without breaking layout.

---

## 🛠️ Local Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production static website (outputs to /dist)
npm run build

# Preview production build locally
npx serve dist
```
