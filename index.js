const cleans = (obj) => {

  const wrapper = {
    delete: () => wrapper,
    map:    () => wrapper
  }

  return wrapper

}


module.exports = cleans
