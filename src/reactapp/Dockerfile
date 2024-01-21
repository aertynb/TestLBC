FROM node:20.9.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock    ./
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]