![Nodezoo][Logo]

# nodezoo-info

- __Lead:__ [Richard Rodger][Lead]
- __Sponsor:__ [nearForm][]

nodezoo.com micro-service handling module. Please see the [main repo][] for more details.

If you're using this microservice, and need help, you can:

- Post a [github issue][],
- Tweet to [@nodezoo][],
- Ask on the [Gitter][gitter-url].

## Running
This micro-service can be ran as part of the [NodeZoo org][] system. Please follow the
link below for details on obtaining and running the complete system.

- [Nodezoo: The complete system][System]

## Patterns Handled
### 'role:info,cmd:get'
Request module name and description
```js
seneca.act(role:'info', req:'get', {name: name})
```

## Patterns Emitted
### 'role:info,res:updated'
Respond with this information
```js
seneca.act(role:'info', req:'updated', {data: data})
```

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
[github issue]: https://github.com/nodezoo/nodezoo-info/issues
[@nodezoo]: http://twitter.com/nodezoo
[gitter-url]: https://gitter.im/nodezoo/nodezoo-org
