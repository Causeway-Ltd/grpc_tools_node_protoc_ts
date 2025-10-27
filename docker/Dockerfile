FROM node:lts-bookworm AS builder

RUN apt-get update && \
    apt-get -y install curl unzip && \
    apt-get clean

RUN curl -L -o protoc.zip https://github.com/protocolbuffers/protobuf/releases/download/v3.11.1/protoc-3.11.1-linux-x86_64.zip && \
    unzip protoc.zip -d /usr

ADD ./src /app/src
ADD ./tsconfig.json /app/
ADD ./package.json /app/
ADD ./package-lock.json /app/

WORKDIR /app

RUN ls -l && npm i --unsafe-perm && npm run build

FROM node:lts-bookworm

ADD ./bin/ /app/bin
COPY --from=builder /app/build/ /app/build
COPY --from=builder /app/node_modules/ /app/node_modules

ENTRYPOINT [ "/app/bin/protoc-gen-ts" ]
