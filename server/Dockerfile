FROM node:12.19.0-alpine
WORKDIR /app
COPY package*.json /app
RUN ["yarn", "install"]
COPY . /app
ENTRYPOINT ["yarn", "dev"]
