const isObject = require('is-object')

const forEachObj = (obj, fn, prefix) => {
  prefix = prefix || ''

  if(!isObject(obj)) return

  Object.keys(obj)
    .forEach(key => {
      fn(prefix + key, obj, key)
      if(isObject(obj[key])) {
        forEachObj(obj[key], fn, key + '.')
      }
      if(Array.isArray(obj[key])) {
        obj[key].forEach(item => {
          forEachObj(item, fn, key + '.')
        })
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
    map: (pattern, fn) => {
      forEachObj(obj, (key, subObj, subKey) => {
        if(key === pattern) {
          subObj[subKey] = fn(subObj[subKey])
        }
      })
      return wrapper
    },
  }

  return wrapper

}


module.exports = cleans
