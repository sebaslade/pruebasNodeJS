//Esto solo en los modulos nativos que no tienen que no tienen promesas nativas
//const {promisify} = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo...");
//Promesas
fs.readFile("./archivo.txt", "utf-8")
    .then(text => {
        console.log("primer texto: ", text);
    });

console.log("-> Haciendo cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8")
    .then(text => {
        console.log("primer texto: ", text);
    });