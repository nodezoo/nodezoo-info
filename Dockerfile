# nodezoo-info

FROM node:4

ADD . /

EXPOSE 44001
EXPOSE 43001

RUN npm install

CMD ["node", "./serve.js", "--seneca.options.tag=info", "--seneca.log.all"]
