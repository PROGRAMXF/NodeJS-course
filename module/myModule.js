//los modulos se usan para aplicaciones grandes

console.log(module);

const myWebAddress = "programxf";
const myNumber = 50;
const myName = "Fernando";
const myLastName = "Herrera";

//si esta variable  const la quiero reutilizar en el resto de la aplicacion la tengo que exportar

module.exports.name = myName;
module.exports.lastname = myLastName;
module.exports.number = myNumber;

console.log(module);
