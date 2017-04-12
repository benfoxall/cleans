const isObject = require('is-object')

const forEachObj = (obj, fn, prefix) => {
  prefix = prefix || ''

  Object.keys(obj)
    .forEach(key => {
      fn(prefix + key, obj, key)
      if(isObject(obj[key])) {
        forEachObj(obj[key], fn, key + '.')
      }
    })
}


const cleans = (obj) => {

  const wrapper = {
    delete: (pattern) => {
      forEachObj(obj, (key, subObj, subKey) => {
        if(key === pattern) {
          delete subObj[subKey]
        }
      })
      return wrapper
    },
    map:    () => wrapper
  }

  return wrapper

}


module.exports = cleans
