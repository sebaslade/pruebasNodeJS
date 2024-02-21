// process
// argumentos de entrada
//console.log(process.argv)

//controlar el proceso
//process.exit(0) // -> 0 = todo ✅ -> 1 = ❌ ocurrio un error y queremos que salga

//podemos escuchar los eventos del proceso
process.on('exit', () =>{
    //limpiar los recursos
})

// current working directory
console.log(process.cwd()) //Nos devuelve desde dónde estamos ejecutando el proceso

// platform
console.log(process.env.PEPITO) // pasando variables de entorno