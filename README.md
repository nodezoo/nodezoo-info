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
### `role:info,cmd:get`
Request module name and description
```js
seneca.act('role:info, cmd:get', {name: 'seneca'})
```

### `role:info,res:part`
Request update of the info cache
```js
seneca.act('role:info, res:part', {name: 'seneca'})
```

## Patterns Emitted
### `role:info,info:updated`
Updates search with the newest data
```js
seneca.act('role:info, info:updated', {data: data})
```

### `role:info,req:part`
Request update of the info cache
```js
seneca.act('role:info, req:part', {name: 'seneca'})
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
[System]: https://github.com/nodezoo/nodezoo-system
[NodeZoo org]: https://github.com/nodezoo
[Logo]: https://raw.githubusercontent.com/nodezoo/nodezoo-org/master/assets/logo-nodezoo.png
[github issue]: https://github.com/nodezoo/nodezoo-info/issues
[@nodezoo]: http://twitter.com/nodezoo
[gitter-url]: https://gitter.im/nodezoo/nodezoo-org
