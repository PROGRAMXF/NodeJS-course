//enviar un archivo grande o dividir un archivo grande en multiples partes para
//ser enviado facilmente

const { writeFile } = require("fs/promises");

//creamos un archivo en la carpeta data mediante una funcion

const createBigFile = async () => {
  await writeFile("./data/bigFile.txt", "Asi creamos un archivo".repeat(100)); //colocamos un repeat para hacer grande el archivo
};

createBigFile();

const { createReadStream } = require("fs");

//creamos un strem de datos:

const stream = createReadStream("./data/bigFile.txt", {
  //creamos un objeto adicional
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  //esta funcion nos permite que lea el archivo por partes al ser tan grande
  console.log(chunk);
});

//tambien tiene un evento end...entre otros.
stream.on("end", () => {
  console.log("YA TODO TERMINO");
});
//y si ocurre un error tambien colocamos un evento
stream.on("error", (error) => {
  console.log(error);
});
