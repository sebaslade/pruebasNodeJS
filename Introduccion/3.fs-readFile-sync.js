const fs = require("node:fs")

console.log("Leyendo el primer archivo...")

const text = fs.readFileSync('archivo.txt', 'utf-8')
console.log("primer texto: ", text)

console.log("-> Haciendo cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...")
const secondText = fs.readFileSync("./archivo2.txt", "utf-8")
console.log("primer texto: ", secondText)

const textModified = text.replace(/mundo/ig, 'NodeJS')
// Esto modificará el archivo original 'archivo.txt'
fs.writeFileSync('archivo-modified.txt', textModified)