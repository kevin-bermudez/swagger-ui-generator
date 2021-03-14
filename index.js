const { generateFilesSwaggerUi } = require('./generateFilesSwaggerUi')
const {
  generateRawSwaggerFromJsDoc,
  createFileSwaggerFromJsDoc
} = require('./generateRawSwaggerFromJsDoc')
const generateFileSwaggerUiFromJsDoc = require('./generateFileSwaggerUiFromJsDoc')

module.exports = {
  generateFilesSwaggerUi,
  generateRawSwaggerFromJsDoc,
  createFileSwaggerFromJsDoc,
  generateFileSwaggerUiFromJsDoc
}
