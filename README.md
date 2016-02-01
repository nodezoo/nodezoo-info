![Nodezoo](https://raw.githubusercontent.com/rjrodger/nodezoo-web/to-redux/client/assets/img/logo-nodezoo.png)

# nodezoo-info
nodezoo.com micro-service handling module.
One of the micro-services that implement
[nodezoo.com](http://nodezoo.com), a search engine for
[Node.js](http://nodejs.org) modules. The NodeZoo search engine is an
example of a real-world service built using Node.js
micro-services. Each micro-service is published in its own github
repository. The codebase is intended to be used as a larger-scale
example, and as a starting point for your own projects.

The search-engine is under development in an open manner, and a blog
series (see below) covers the full details.

This micro-service uses the Seneca micro-service toolkit. For an
introduction to Seneca itself, see the
[senecajs.org](http://senecajs.org) site.

Feel free to contact me on twitter if you
have any questions! :) [@rjrodger](http://twitter.com/rjrodger)

Tested on: Seneca 0.5.20, Node 0.10.31


- __Sponsor:__ [nearForm][]

## Install

Create a project folder for all the _nodezoo_ micro-service repositories. The _clone_ this repository into your project folder:

```sh
git clone https://github.com/rjrodger/nodezoo-info.git
```

Alternatively, fork the repository so that you can make your own changes.


## Messages

This micro-service recognizes the following messages:

   * _role:npm,cmd:get_ - get module details by name
   * _role:npm,cmd:query_ - query module details from NPM
   * _role:npm,cmd:extract_ - extract relevant data from NPM result

And issues the following messages:

   * _role:search,cmd:insert_ - insert module details into search engine index, OPTIONAL

It overrides these messages:

   * _role:entity,cmd:save,name:npm_ - insert module details into search engine in parallel to save



## Contributing
The [NodeZoo][] org encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

## License
Copyright (c) 2015, Richard Rodgers and other contributors.
Licensed under [MIT][].


[MIT]: ./LICENSE
[Code of Conduct]: https://github.com/nearform/vidi-contrib/docs/code_of_conduct.md
[nearForm]: http://www.nearform.com/
[NodeZoo]: http://www.nodezoo.com/
