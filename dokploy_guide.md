# Dokploy Deployment Guide - Separate Services

Follow these steps to deploy the AI YouTube Shorts Studio on Dokploy as separate services.

## 1. PostgreSQL Service
1.  Create a new **PostgreSQL** service in Dokploy.
2.  Note the **Internal Connection String** (e.g., `postgresql://postgres:password@postgres-service:5432/db`).

## 2. Backend Service (Express)
1.  Create a new **Application** service.
2.  **Source**: GitHub link to your repository.
3.  **Root Directory**: `backend` (set this in the Dokploy settings).
4.  **Dockerfile Context**: `backend`
5.  **Environment Variables**:
    - `DATABASE_URL`: Use the Postgres connection string.
    - `OPENAI_API_KEY`: Your key.
    - `ELEVENLABS_API_KEY`: Your key.
    - `JWT_SECRET`: A random string.
    - `ADMIN_EMAIL`: Your login email.
    - `ADMIN_PASSWORD`: Your login password.
    - `PORT`: `5000`
6.  **Port Forwarding**: Map port `5000` (internal) to any public port or domain.

## 3. Frontend Service (Next.js)
1.  Create another **Application** service.
2.  **Source**: Same GitHub repository.
3.  **Root Directory**: `frontend`
4.  **Dockerfile Context**: `frontend`
5.  **Port**: `3080` (Internal port as configured in the Dockerfile).
6.  **Environment Variables**:
    - `NEXT_PUBLIC_API_URL`: The **public URL** of your Backend service (e.g., `https://api.yourstudio.com/api`).
7.  **Port Forwarding**: Map port `3080` (internal) to your public domain.

## Deployment Order
1.  Deploy **Postgres** first.
2.  Deploy **Backend** second (it will run migrations if set up, or you can run `npx prisma db push` via the Dokploy terminal).
3.  Deploy **Frontend** last.
