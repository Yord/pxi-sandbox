module.exports = {
  name: 'csv',
  desc: 'is a csv marshaller.', // does not support embedded line breaks
  func: ({mdelimiter, D, mheader, H}) => {
    const _delimiter   = mdelimiter || D || ','
    const _mheader     = mheader    || H || '[]'
    
    let keysNotWritten = true

    return values => {
      let str   = ''
      const err = []

      if (keysNotWritten) {
        keysNotWritten = false

        let keys = JSON.parse(_mheader)
        if (keys.length === 0) {
          if (values.length > 0) {
            const value = values[0]

            if (Array.isArray(value))           keys = value
            else if (typeof value === 'object') keys = Object.keys(value)
          }
        }

        values.unshift(keys)
      }

      const lines = []
      for (let index = 0; index < values.length; index++) {
        let value = values[index]

        if (typeof value === 'object') value = Object.values(value)

        let line = []
        for (let jndex = 0; jndex < value.length; jndex++) {
          const item = value[jndex].toString()

          let needQuotes = false
          let item2      = ''
          for (let undex = 0; undex < item.length; undex++) {
            const ch = item[undex]
            if (ch === _delimiter)   needQuotes = true
            else if (ch === '"') {
                                     needQuotes = true
                                     item2 += '""'
            } else if (ch === '\n')  item2 += ' '
            else                     item2 += ch
          }

          if (needQuotes) line.push('"' + item2 + '"')
          else            line.push(      item2      )
        }

        lines.push(line)
      }

      for (let index = 0; index < lines.length; index++) {
        const line = lines[index]

        if (line.length > 0) {
          str += line[0]
  
          for (let index = 1; index < line.length; index++) {
            const item = line[index]
    
            str += _delimiter + item
          }
  
          str += '\n'
        }
      }

      return {err, str}
    }
  }
}