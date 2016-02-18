![Nodezoo][Logo]

# nodezoo-info

- __Lead:__ [Richard Rodger][Lead]
- __Sponsor:__ [nearForm][]

nodezoo.com micro-service handling module. Please see the [main repo][] for more details.

## Install

1. clone this repo into a root _/nodezoo_ folder.
2. run `npm install`

## Starting
To start simply run,

```
npm start
```

### Tagging and Logs
To tag your service and set up logs simply pass the relevant switches on start,

```
npm start -- --seneca.options.tag=nodezoo-info --seneca.log.all
```
## Inbound Messages
* _role:info,cmd:get_ - request module name and description

## Outbound Messages
* _role:info,res:part_ - respond with this information

## Running with Curl

Any of the messages above can be run using curl in the following format in the command line

* to check that `info_cache` has items:
```
curl http://localhost:44001/act  -H "Content-Type: application/js -d '{"role":"info","cmd":"get","name":"underscore"}'
```
* to check the headers:
```
curl http://localhost:44001/act  -H "Content-Type: application/json" -v -d '{"role":"info","cmd":"get","name":"underscore"}'
```

## Contributing
The [NodeZoo org][] encourages __open__ and __safe__ participation.

- __[Code of Conduct][CoC]__

If you feel you can help in any way, be it with documentation, examples, extra testing, or new
features please get in touch.

## License
Copyright (c) 2014 - 2016, Richard Rodger and other contributors.
Licensed under [MIT][].

[main repo]: https://github.com/rjrodger/nodezoo
[MIT]: ./LICENSE
[CoC]: https://github.com/nodezoo/nodezoo-org/blob/master/CoC.md
[Lead]: https://github.com/rjrodger
[nearForm]: http://www.nearform.com/
[NodeZoo]: http://www.nodezoo.com/
[NodeZoo org]: https://github.com/nodezoo
[Logo]: https://github.com/nodezoo/nodezoo-org/blob/master/assets/logo-nodezoo.png
