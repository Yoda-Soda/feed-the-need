FROM node:12.19.0-alpine3.11
WORKDIR /app
COPY package*.json /app
RUN ["yarn", "install"]
COPY . /app
ENTRYPOINT ["yarn", "dev"]
