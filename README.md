# cleans
A tool for cleaning up js objects


```js
const cleans = require('cleans')

const obj = {
  a:'bar',
  b: {
    c: 5,
    d: "stuff"
  }  
}

cleans(obj)
  .delete('a')
  .delete('b.d')
  .map('b.c', x => x * 2)


console.log(obj)

{
  b: {
    c: 10
  }  
}
```
