const xml     = require('./src/xml')
const geojson = require('./src/geojson')
const cata    = require('./src/cata')

const R       = require('ramda')

const getTime = json => json.time

module.exports = {
  plugins:  [
    xml,
    geojson,
    cata
  ],
  context:  Object.assign({}, R, {getTime}),
  defaults: {}
}