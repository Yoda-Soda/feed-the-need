FROM node:12
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY . /app
RUN ["yarn", "install"]
EXPOSE 3333
ENTRYPOINT ["yarn", "start"]

