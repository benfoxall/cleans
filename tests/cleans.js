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
