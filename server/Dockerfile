FROM node:12-alpine
WORKDIR /app
COPY package*.json /app
RUN ["yarn", "install"]
COPY . /app
ENTRYPOINT ["yarn", "dev"]
