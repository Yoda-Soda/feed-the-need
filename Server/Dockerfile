FROM node:12
WORKDIR /app
COPY . /app
RUN ["yarn", "install"]
EXPOSE 5432
ENTRYPOINT ["yarn", "start:dev"]
