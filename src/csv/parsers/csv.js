module.exports = {
  name: 'csv',
  desc: 'is a csv parser.', // does not support embedded line breaks
  func: ({delimiter, pdelimiter, D, header, pheader, H}) => {
    const _delimiter = pdelimiter || delimiter || D || ','
    const _header    = pheader    || header    || H || '[]'
    let keys         = JSON.parse(_header)

    return (tokens, lines) => {
      const err   = [] // add error handling
      const jsons = []
      
      for (let line = 0; line < tokens.length; line++) {
        const token = tokens[line]
        let values  = []
        let from    = 0

        for (let at = 0; at < token.length; at++) {
          const ch         = token.charAt(at)

          let mayBeEscaped = false
          let inString     = false
          let valueFound   = false

          if (inString) {
            if (mayBeEscaped) {
              if (ch === _delimiter) {
                valueFound   = true
                mayBeEscaped = false
              } else if (ch !== '"') {
                mayBeEscaped = false
                inString     = false
              } else if (ch === '"') {
                mayBeEscaped = false
              }
            } else {
              if (ch === '"') mayBeEscaped = true
            }
          } else {
            if (ch === '"')             inString   = true
            else if (ch === _delimiter) valueFound = true
          }
          
          if (valueFound) {
            valueFound  = false
            const value = token.slice(from, at)

            values.push(value)

            from        = at + 1
          }

          if (at === token.length - 1) {
            const value = token.slice(from)
            
            values.push(value)
          }
        }

        let json = {}

        if (keys.length === 0) keys = values
        else {
          for (let jndex = 0; jndex < keys.length; jndex++) {
            if (keys.length === values.length) {
              const key   = keys[jndex]
              const value = values[jndex]
              json[key]   = value
            } else {
              // fail otherwise
            }
          }
  
          jsons.push(json)
        }
      }

      return {err, jsons}
    }
  }
}