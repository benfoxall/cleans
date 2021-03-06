const test = require('tape')

const cleans = require('../')

test('basic api', t => {
  t.plan(5)

  t.equal(typeof cleans, 'function')

  const c = cleans({})

  t.equal(typeof c.delete, 'function')
  t.equal(typeof c.map, 'function')

  // fluent interface
  t.equal(c.delete(), c)
  t.equal(c.map(), c)
})


test('delete', t => {
  t.plan(1)

  const obj = {
    a:'a',
    b:'b'
  }

  cleans(obj)
    .delete('b')

  t.deepEqual(obj, {a:'a'})

})


test('delete nested', t => {
  t.plan(1)

  const obj = {
    a: {
      b: 'b',
      c: 'c'
    }
  }

  cleans(obj)
    .delete('a.b')

  t.deepEqual(obj, {a: {c: 'c'}})

})



test('map', t => {
  t.plan(1)

  const obj = {
    a:'a',
    b:2,
    c: {
      d: '2'
    }
  }

  cleans(obj)
    .map('b', v => parseFloat(v) * 10)
    .map('c.d', v => parseFloat(v) * 100)

  t.deepEqual(obj, {a:'a', b: 20, c: {d: 200}})

})


test('array support', t => {
  t.plan(1)

  const obj = {
    a:'a',
    b:[
      {c: 1, d: 2},
      {c: 3, d: 4}
    ]
  }

  cleans(obj)
    .delete('b.c')
    .map('b.d', v => v * 2)


  t.deepEqual(obj, {
    a:'a',
    b:[
      {d: 4},
      {d: 8}
    ]
  })

})
