FROM postgres:13
ENV POSTGRES_PASSWORD=password
COPY ./sql /docker-entrypoint-initdb.d

# as per https://hub.docker.com/_/postgres  ctrl f Initialization scripts