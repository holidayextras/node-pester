Pester
===

*Will **pester** you, if you're running the wrong version of Node.js for your app*

This small module will check your package.json and make sure you are running the Node.js version specfied in `package.engines.node`.

## Installation

```
npm install pester
```

## Usage
Just require pester in your root file*(server.js)*.

```
require('pester');
```

Which will print a warning like so if your Node.js version does not match that which is specified in your package.json file.

```
---------------------------------------------------------------------
WARNING: Node version doesn't match version specified in package.json!
Current: 0.10.23 Required: 0.10.24
---------------------------------------------------------------------
```

## Maintainers

This module is maintained by:

* [Joe Warren](http://github.com/joezo)
* [Rahul Patel](http://github.com/rahulpatel)

## License
MIT