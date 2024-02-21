const { readFile } = require("node:fs/promises")
//Async-Await sin MJS
async function init(){
    console.log("Leyendo el primer archivo...");

    const text = await readFile("./archivo.txt", "utf-8");
    console.log("primer texto: ", text);

    console.log("-> Haciendo cosas mientras lee el archivo...");

    console.log("Leyendo el segundo archivo...");
    const secondText = await readFile("./archivo2.txt", "utf-8");
    console.log("primer texto: ", secondText);
}
init()

//IIFE = Inmediatly Invoked Function Expression
/*
;(async () => {
    console.log("Leyendo el primer archivo...");

    const text = await readFile("./archivo.txt", "utf-8");
    console.log("primer texto: ", text);

    console.log("-> Haciendo cosas mientras lee el archivo...");

    console.log("Leyendo el segundo archivo...");
    const secondText = await readFile("./archivo2.txt", "utf-8");
    console.log("primer texto: ", secondText);
})();
*/