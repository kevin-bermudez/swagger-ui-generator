const { generateFilesSwaggerUi } = require('./generateFilesSwaggerUi')
const { createFileSwaggerFromJsDoc } = require('./generateRawSwaggerFromJsDoc')
const path = require('path')

const generateFilesSwaggerUiFromJsDoc = (jsDocOptions, distPath) => {
  const jsonPath = path.resolve(distPath, 'doc.json')
  createFileSwaggerFromJsDoc(jsDocOptions, jsonPath)

  generateFilesSwaggerUi(jsonPath, distPath)
}

module.exports = generateFilesSwaggerUiFromJsDoc
