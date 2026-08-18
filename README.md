# ksajobs24

Job portal for Saudi Arabia — monorepo with two frontends and one shared Python API.

## Structure

```
ksajobs24/
├── apps/
│   ├── web/     # 🌐 Public job portal — React + Vite + TS → Vercel
│   ├── admin/   # 🛠️ Admin panel (jobs, blogs, users) — React + Vite + TS → Vercel
│   └── api/     # ⚙️ FastAPI (Python, uv) → Render · D1 (DB) + R2 (media)
└── README.md
```

## Stack

| App   | Tech                     | Host   |
|-------|--------------------------|--------|
| web   | React 19 · Vite · TS     | Vercel |
| admin | React 19 · Vite · TS     | Vercel |
| api   | FastAPI · uv · Pydantic  | Render |

- **Database:** Cloudflare D1 (SQLite) via REST API
- **Media:** Cloudflare R2 (S3-compatible, boto3)
- **Config:** everything via `.env` (copy `.env.example` in each app)

## Quick start

```bash
# API (Python ≥3.12, uv)
cd apps/api && cp .env.example .env && uv run uvicorn main:app --reload --port 8000

# Web (http://localhost:5173)
cd apps/web && cp .env.example .env && npm install && npm run dev

# Admin (http://localhost:5174)
cd apps/admin && cp .env.example .env && npm install && npm run dev -- --port 5174
```
