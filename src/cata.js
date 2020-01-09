const scan = {
  name: "scan",
  desc: "as in fold.",
  func: (fs, {value, V}) => {
    const f = fs[0] || ((acc, json) => json)
    const _value = typeof value !== 'undefined' ? value :
                   typeof V     !== 'undefined' ? V
                                                : '{}'
    let acc = JSON.parse(_value)

    //console.log('_value', _value, 'acc', acc, 'typeof acc', typeof acc, 'Array.isArray(acc)', Array.isArray(acc))

    return (jsons, lines) => {
      let jsons2 = []
      let err    = []

      for (let index = 0; index < jsons.length; index++) {
        const json = jsons[index]
        acc = f(acc, json) // could be a problem if f mutates acc!
        jsons2.push(acc)
      }

      return {err, jsons: jsons2}
    }
  }
}

module.exports = {
  chunkers:      [],
  deserializers: [],
  applicators:   [scan],
  marshallers:   []
}