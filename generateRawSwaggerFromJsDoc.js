const fs = require('fs')
const swaggerJsdoc = require('swagger-jsdoc')

const generateRawSwaggerFromJsDoc = jsDocOptions => {
  return swaggerJsdoc(jsDocOptions)
}

const createFileSwaggerFromJsDoc = (jsDocOptions, distJsonSwagger) => {
  const rawSwagger = generateRawSwaggerFromJsDoc(jsDocOptions)
  fs.writeFileSync(distJsonSwagger, JSON.stringify(rawSwagger))
}

module.exports = { createFileSwaggerFromJsDoc, generateRawSwaggerFromJsDoc }
