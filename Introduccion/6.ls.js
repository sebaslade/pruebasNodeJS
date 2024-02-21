//comando ls en la terminal -> ./img/ls-comand

const fs = require('node:fs')

fs.readdir('.',(err, files) => {
    if(err){
        console.log('Error al leer el directorio', err)
        return;
    }
    files.forEach(file => {
        console.log(file)
    })
})