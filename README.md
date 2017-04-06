# Banr [![Build Status](https://travis-ci.org/joseluisq/banr.svg?branch=master)](https://travis-ci.org/joseluisq/banr) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
> Get one-line comment banner based on your package.json.

## Install

[Yarn](https://yarnpkg.com)

```sh
yarn add banr --dev
```

[NPM](https://www.npmjs.com)

```sh
npm install banr --save-dev
```

## Structure
The following json keys should be defined in `package.json`:

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

__Note:__ `author` value can be defined like `object` or `string`.

## Usage

By default, __Banr__ uses the `package.json` located in your [current working directory](https://nodejs.org/api/process.html#process_process_cwd):

```js
var banr = require('banr');
banr();
/*! MyModule v1.0.0 | MIT (c) 2017 John Doe */
```

Also it's possible to pass a custom `package.json` path:

```js
var banr = require('banr');
banr('./my-module-path/package.json');
/*! MyModule v2.0.0 | MIT (c) 2017 Captain Jack */
```

If `package.json` path doesn't exist, an empty `string` will be returned.

## Related
[banr-stream](https://github.com/joseluisq/banr-stream) - Prepend one-line package.json banner in pipeline.

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
