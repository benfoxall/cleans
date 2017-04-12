const forEachObj = (obj, fn) => {
  Object.keys(obj)
    .forEach(key => {
      fn(key, obj)
    })
}


const cleans = (obj) => {

  const wrapper = {
    delete: (pattern) => {
      forEachObj(obj, (key) => {
        if(key === pattern) {
          delete obj[key]
        }
      })
      return wrapper
    },
    map:    () => wrapper
  }

  return wrapper

}


module.exports = cleans
