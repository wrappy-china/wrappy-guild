FROM node:10.20.1-stretch-slim


RUN mkdir /app
WORKDIR /app


COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build && npm prune --production

ENV NODE_ENV=production
CMD ["npm", "start"]
