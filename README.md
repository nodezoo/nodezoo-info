# nodezoo-info

[![Build Status](https://travis-ci.org/nodezoo/nodezoo-info.svg?branch=master)](https://travis-ci.org/nodezoo/nodezoo-info)
[![Gitter Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodezoo/nodezoo-org)

This is a repository in the microservice demonstration system for
the [Tao of Microservices](//bit.ly/rmtaomicro) book (chapter 9). This
code is live at [nodezoo.com](http://nodezoo.com). To get started,
visit the [nodezoo/tao](//github.com/nodezoo/tao) repository.

__This microservice provides the module information page functionality.__


## Running

To run this microservice normally, use the tooling describing in
the [nodezoo/tao](//github.com//nodezoo/tao) repository, which shows you how to run
the entire system of microservices (of which this is only one of many) in
production ([Kubernetes](//kubernetes.io)), staging
([Docker](//docker.com)), and development
([fuge](//github.com/apparatus/fuge)) modes.

To run from the terminal for testing and debugging, see
the [Running from the terminal](#running-from-the-terminal) section
below.


## Message flows

The table shows how this microservice acts on the `Accepted` message
patterns and performs appropriate business `Actions`, as a result of
which, new messages are possibly `Sent`.

|Accepted |Actions |Sent
|--|--|--
|`role:info,cmd:get (SC)` |Provide module information by asking other microservices for data. |`role:info,need:part (AO)`
|`role:info,collect:part (AO)` |Collect partial module information|

(KEY: A: asynchronous, S: synchronous, O: observed, C: consumed)

### Service interactions

![info](info.png?raw=true "suggest")


## Testing

Unit tests are in the [test](test) folder. To run, use:

```sh
$ npm test
```

Note that this is a learning system, and the tests are not intended to
be high coverage.


## Running from the terminal

This microservice is written in [node.js](//nodejs.org), which you
will need to download and install. Fork and checkout this repository,
and then run `npm` inside the repository folder to install its dependencies:

```sh
$ npm install
```

To run this microservice separately, for development, debug, or
testing purposes, use the service scripts in the [`srv`](srv) folder:

* [`info-dev.js`](srv/info-dev.js) : run the development configuration 
  with hard-coded network ports.

  ```sh
  $ node srv/info-dev.js
  ```

  This script listens for messages on port 9030 and provides a REPL on
  port 10030 (try `$ telnet localhost 10030`).

  A [seneca-mesh](//github.com/senecajs/seneca-mesh) version, for
  testing purposes, is also shown in the
  script [`info-dev-mesh.js`](srv/info-dev-mesh.js). For more on
  this, see the [nodezoo-repl](//github.com/nodezoo/nodezoo-repl)
  repository.

* [`info-stage.js`](srv/info-stage.js) : run the staging
  configuration. This configuration is intended to run in a Docker
  container so listens on port 9000 by default, but you can change
  that by providing an optional argument to the script.

  ```sh
  $ node srv/info-stage.js [PORT]
  ```

* [`info-prod.js`](srv/info-prod.js) : run the production
  configuration. This configuration is intended to run under
  Kubernetes in a [seneca-mesh](//github.com/senecajs/seneca-mesh)
  network. If running in a terminal (only do this for testing), you'll
  need to provide the mesh base nodes in the `BASES` environment
  variable.

  ```sh
  $ BASES=x.x.x.x:port node srv/info-prod.js
  ```
