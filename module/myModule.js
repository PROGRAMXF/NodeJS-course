//los modulos se usan para aplicaciones grandes

const myWebAddress = "programxf";
const myNumber = 50;
const myName = "Fernando";
const myLastName = "Herrera";

//si esta variable  const la quiero reutilizar en el resto de la aplicacion la tengo que exportar

const group = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myName: myName,
    myLastName: myLastName
}
module.exports = group;
