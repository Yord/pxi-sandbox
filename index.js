const xml     = require('./src/xml')
const geojson = require('./src/geojson')
const cata    = require('./src/cata')

const coerce = str => {
  const num = +str
  return num === num ? num : str
}

module.exports = {
  plugins:  [
    xml,
    geojson,
    cata
  ],
  context:  Object.assign({}, require('ramda'), {_: require('lodash'), coerce}),
  defaults: {}
}