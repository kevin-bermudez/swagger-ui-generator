const generateRawSwaggerFromJsDoc = require('./generateRawSwaggerFromJsDoc')
const { generateFilesSwaggerUi } = require('./generateFilesSwaggerUi')
const { createFileSwaggerFromJsDoc } = require('./generateRawSwaggerFromJsDoc')

const generateFilesSwaggerUiFromJsDoc = (
  jsDocOptions,
  distPath,
  distJsonSwagger
) => {
  createFileSwaggerFromJsDoc(jsDocOptions, distJsonSwagger)
  generateFilesSwaggerUi(distJsonSwagger, distPath)
}

module.exports = generateFilesSwaggerUiFromJsDoc
