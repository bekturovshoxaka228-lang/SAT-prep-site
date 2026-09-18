FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

ARG NEXT_PUBLIC_API_URL=https://api-production-5ed9.up.railway.app
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
