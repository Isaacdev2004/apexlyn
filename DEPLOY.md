# Deploy APEXLyn: Frontend (Vercel) + Backend (Render)

This repo has two **standalone** folders you can deploy separately:

- **`frontend/`** – Vite + React marketing site → deploy to **Vercel**
- **`backend/`** – Express API → deploy to **Render**

No monorepo or workspace setup is required on the host; each folder has its own `package.json` and install/build/start commands.

---

## 1. Deploy frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and import your Git repo.
2. In **Project Settings** → **General** → **Root Directory**: set to **`frontend`**.
3. Leave **Framework Preset** as **Vite** (or “Other” if you prefer).
4. Build and output are already set in `frontend/vercel.json`:
   - **Build Command:** `npm install && npm run build`
   - **Output Directory:** `dist`
5. Deploy. The SPA rewrite (all routes → `/index.html`) is in `vercel.json`.

**Local test (frontend):**
```bash
cd frontend
npm install
npm run build
npm run serve
```

---

## 2. Deploy backend to Render

1. Go to [render.com](https://render.com) and create a new **Web Service**.
2. Connect the same Git repo.
3. Set **Root Directory** to **`backend`**.
4. Use:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node dist/index.cjs`
5. Add environment variables in the Render dashboard:
   - **PORT** – Render sets this automatically for web services.
   - **DATABASE_URL** – your PostgreSQL connection string (if the API uses the db package).

**Local test (backend):**
```bash
cd backend
npm install
# Set DATABASE_URL if your code uses it
npm run build
npm start
```

---

## 3. Point frontend to the backend (optional)

After the backend is live on Render (e.g. `https://apexlyn-api.onrender.com`), configure the frontend to call that URL (env or config), e.g.:

- In the frontend, set `VITE_API_URL=https://apexlyn-api.onrender.com` (or your Render URL) and use it for API requests.
- If you use the API client in `frontend/src/lib/api-client-react`, ensure the base URL uses this env variable.

---

## Summary

| App      | Folder     | Deploy to | Root directory |
|----------|------------|-----------|-----------------|
| Marketing site | `frontend/` | Vercel  | `frontend`  |
| API      | `backend/`  | Render  | `backend`   |

Each folder is self-contained: its own dependencies, build, and run commands.
