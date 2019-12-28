module.exports = {
  lexers:      [],
  parsers:     [require('./parsers/csv')],
  applicators: [],
  marshallers: [require('./marshallers/csv')]
}