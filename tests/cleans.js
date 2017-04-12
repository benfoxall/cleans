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