# Banr [![Build Status](https://travis-ci.org/joseluisq/banr.svg?branch=master)](https://travis-ci.org/joseluisq/banr)
> Get one-line comment banner based on your package.json.

![Banr](https://cloud.githubusercontent.com/assets/1700322/12219069/35cca04a-b701-11e5-90a2-4e90e69cb3c8.png)

## Install

```sh
$ npm install banr --save-dev
```

## Structure
The following keys should be defined in `package.json`:

```json
{
  "name": "my-module",
  "version": "1.0.0",
  "license": "MIT",
  "author": {
    "name": "John Doe"
  }
}
```

## Usage

By default, **Banr** uses the `package.json` located at your [current working directory](https://nodejs.org/api/process.html#process_process_cwd):

```js
var banr = require('banr');
banr();
/*! MyModule v1.0.0 | MIT (c) 2016 John Doe */
```

Also it's possible to pass a custom `package.json` path:

```js
var banr = require('banr');
banr('./my-module-path/package.json');
/*! MyModule v2.0.0 | MIT (c) 2016 Captain Jack */
```

If `package.json` path doesn't exist, an empty string will be returned.

## Contributions
[Pull requests](https://github.com/joseluisq/banr/pulls) and [issues](https://github.com/joseluisq/banr/issues) are be welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
