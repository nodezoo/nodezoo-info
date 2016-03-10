# nodezoo-info
FROM node:4

RUN mkdir /src

ADD package.json /src/

WORKDIR /src

RUN npm install

COPY . /src

CMD ["node", "-r", "toolbag", "srv/info-dev.js", "--seneca.options.tag=nodezoo-info", "--seneca-log=type:act"]
