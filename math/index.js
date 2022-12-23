//creamos cuatro funciones
export function add (x, y){
    return x + y;
}
export function subtract (x, y){
    return x - y;
}
export function multiply (x, y){
    return x * y;
}
export function divide (x, y){
    return x / y;
}

//para compartir estas funciones puedo crear un modulo


export default {
    add, 
    subtract, 
    multiply, 
    divide
}