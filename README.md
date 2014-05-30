# jspage

Convert a script into an HTML page containing that script.

## Installation

```
$ npm install --global jspage
```

## Usage

```
  Usage: jspage [options] [file]

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -t, --title <title>  The page title
    -b, --blank          Blank page (no code preview)

  Examples:

    $ jspage foo.js > bar.html
    $ jspage < foo.js > bar.html
    $ cat foo.js bar.js | jspage -b > baz.html
    $ echo "alert('Hello World')" | jspage > foo.html
```

## License

[MIT](http://pierre.mit-license.org/)
