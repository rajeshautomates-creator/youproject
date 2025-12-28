FROM node:20-slim

# Install dependencies including openssl for Prisma
RUN apt-get update && apt-get install -y ffmpeg python3 build-essential openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy prisma schema first
COPY prisma ./prisma/

# Generate prisma client with a placeholder URL to avoid build-time errors
RUN DATABASE_URL="postgresql://placeholder:5432" npx prisma generate

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
