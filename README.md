# cleans

[![Build
Status](https://travis-ci.org/benfoxall/cleans.svg?branch=master)](https://travis-ci.org/benfoxall/cleans)

A tool for cleaning up js objects

```js
const cleans = require('cleans')

const obj = {
  a:'bar',
  b: {
    c: 5,
    d: "stuff"
  },
  e: [{
    f: 2
  }]
}

cleans(obj)
  .delete('a')
  .delete('b.d')
  .map('b.c', x => x * 2)
  .map('e.f', x => 'hello')


console.log(obj)

{
  b: {
    c: 10
  },
  e: [{
    f: 'hello'
  }]
}
```
