const xml     = require('./src/xml')
const geojson = require('./src/geojson')
const cata    = require('./src/cata')


module.exports = {
  plugins:  [
    xml,
    geojson,
    cata
  ],
  context:  {},
  defaults: {}
}