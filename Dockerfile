FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "build"]

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
