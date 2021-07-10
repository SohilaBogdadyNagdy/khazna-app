FROM node:12
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
RUN chmod +x ./index.js
EXPOSE 8000
CMD [ "node", "index.js" ]