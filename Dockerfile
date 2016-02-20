# nodezoo-info

FROM node:4

ADD . /

EXPOSE 44001
EXPOSE 43001

CMD ["node","srv/info-dev.js","--seneca.options.tag=info","--seneca.log.all"]
