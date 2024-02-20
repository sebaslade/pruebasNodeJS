import { readFile } from "node:fs/promises";
//Async-Await
console.log("Leyendo el primer archivo...");

const text = await readFile("./archivo.txt", "utf-8")
console.log("primer texto: ", text);

console.log("-> Haciendo cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8")
console.log("primer texto: ", secondText);