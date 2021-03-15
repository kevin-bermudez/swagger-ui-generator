const fs = require('fs')
const path = require('path')
const datauri = require('datauri')

const swaggerDistPath = path.resolve(__dirname, 'swagger-ui-dist')
const listFiles = fs.readdirSync(swaggerDistPath)

const generateContentForIndexHtml = async (jsonSwaggerPath, distPath) => {
  const pathIndex = `${distPath}/index.html`
  const content = fs.readFileSync(pathIndex, 'utf-8')
  const dataUriJsonSwagger = await datauri(jsonSwaggerPath)
  const result = content.replace('{{urlSwaggerJson}}', dataUriJsonSwagger)
  fs.writeFileSync(pathIndex, result)
}

const generateFilesSwaggerUi = (jsonSwaggerPath, distPath) => {
  const newJsonSwaggerName = path.basename(jsonSwaggerPath)
  const newPathSwaggerJson = `${distPath}/${newJsonSwaggerName}`
  if (jsonSwaggerPath !== newPathSwaggerJson) {
    fs.copyFileSync(jsonSwaggerPath, newPathSwaggerJson)
  }

  listFiles.forEach(file => {
    if (file !== '.' && file !== '..') {
      console.log('file is', file)
      fs.copyFileSync(`${swaggerDistPath}/${file}`, `${distPath}/${file}`)
    }
  })

  generateContentForIndexHtml(newPathSwaggerJson, distPath)
}

module.exports = {
  generateFilesSwaggerUi,
  generateContentForIndexHtml
}
