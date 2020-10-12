FROM node:12
WORKDIR /app
COPY . /app
RUN ["yarn", "install"]
EXPOSE 5000
ENTRYPOINT ["yarn", "start:dev"]
