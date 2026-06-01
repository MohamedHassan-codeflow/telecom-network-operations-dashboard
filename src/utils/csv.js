export function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean)
  if (lines.length < 2) return []
  const headers = splitCsvLine(lines[0]).map((h) => normalizeKey(h))
  return lines.slice(1).map((line) => {
    const values = splitCsvLine(line)
    return headers.reduce((row, key, index) => {
      row[key] = values[index] ?? ''
      return row
    }, {})
  })
}

function splitCsvLine(line) {
  const result = []
  let current = ''
  let insideQuotes = false
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]
    if (char === '"') insideQuotes = !insideQuotes
    else if (char === ',' && !insideQuotes) {
      result.push(current.trim())
      current = ''
    } else current += char
  }
  result.push(current.trim())
  return result
}

function normalizeKey(value) {
  return value.trim().replace(/^\uFEFF/, '').replace(/\s+/g, '').replace(/^[A-Z]/, (m) => m.toLowerCase())
}

export function rowsToCsv(rows) {
  if (!rows.length) return ''
  const headers = Object.keys(rows[0])
  const escape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`
  return [headers.join(','), ...rows.map((row) => headers.map((h) => escape(row[h])).join(','))].join('\n')
}

export function downloadCsv(filename, rows) {
  const csv = rowsToCsv(rows)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
