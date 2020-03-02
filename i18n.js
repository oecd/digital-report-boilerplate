// Script reads previously generated i18n.json file and 
// dumps each language section into its own file
const fs = require('fs')
const path = require('path')
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'dist/i18n.json')))
const outPath = 'dist/locales'

if (!fs.existsSync(outPath)) fs.mkdirSync(outPath)
for (key of Object.keys(json)) {
  fs.writeFileSync(path.resolve(__dirname, `${outPath}/${key}.json`), JSON.stringify(json[key], null, 2))
}
