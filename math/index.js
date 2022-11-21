//creamos cuatro funciones
function add (x, y){
    return x + y;
}
function subtract (x, y){
    return x - y;
}
function multiply (x, y){
    return x * y;
}
function divide (x, y){
    return x / y;
}

//para compartir estas funciones puedo crear un modulo

module.exports = {
    add, 
    subtract, 
    multiply, 
    divide
}