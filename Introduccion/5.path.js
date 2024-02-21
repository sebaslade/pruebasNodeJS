const path = require('path')

// barra separadora de carpetas según el Sistema operativo => SO
console.log(path.sep)

// unir rutas
const filePath = path.join('content','subfolder','text.txt')
console.log(filePath)

const base = path.basename('/tmp/sebas-secret-files/password.txt')
console.log(base)

const fileName = path.basename('/tmp/sebas-secret-files/password.txt', '.txt')
console.log(fileName)

const extension = path.extname('image.jpg')
console.log(extension)