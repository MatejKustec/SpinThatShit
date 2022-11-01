FROM node:12.4.0-stretch

COPY . /app
WORKDIR /app

RUN rm -rf ./node_modules/
RUN npm install

CMD npm run bsync & npm run watch
