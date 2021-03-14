const fs = require('fs')
const path = require('path')

const swaggerDistPath = path.resolve(__dirname, 'swagger-ui-dist')
const listFiles = fs.readdirSync(swaggerDistPath)

const generateContentForIndexHtml = (jsonSwaggerPath, distPath) => {
  const pathIndex = `${distPath}/index.html`
  const content = fs.readFileSync(pathIndex, 'utf-8')
  const jsonName = path.basename(jsonSwaggerPath)
  const result = content.replace('{{urlSwaggerJson}}', `./${jsonName}`)
  fs.writeFileSync(pathIndex, result)
}

const generateFilesSwaggerUi = (jsonSwaggerPath, distPath) => {
  const newJsonSwaggerName = path.basename(jsonSwaggerPath)
  const newPathSwaggerJson = `${distPath}/${newJsonSwaggerName}`
  fs.copyFileSync(jsonSwaggerPath, newPathSwaggerJson)
  listFiles.forEach(file => {
    if (file !== '.' && file !== '..') {
      fs.copyFileSync(`${swaggerDistPath}/${file}`, `${distPath}/${file}`)
    }
  })

  generateContentForIndexHtml(newPathSwaggerJson, distPath)
}

module.exports = {
  generateFilesSwaggerUi,
  generateContentForIndexHtml
}
