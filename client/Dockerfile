FROM node:12
WORKDIR /app
# ENV CHOKIDAR_USEPOLLING=true
COPY package.json /app
COPY yarn.lock /app
RUN ["yarn", "install"]
COPY . /app
EXPOSE 3333
ENTRYPOINT ["yarn", "start"]

