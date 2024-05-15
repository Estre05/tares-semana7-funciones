"Use strict";

//Sin parámetros, sin valor de retorno
function saludar(){
    alert("¡BUENOS DIAS!")
}
saludar()

//Con parámetros, sin valor retorno
function mostrarNombre(nombre){
    alert("Mucho gusto.. "+nombre);
}
nombre=prompt("Como te llamas?");
mostrarNombre(nombre);

//Sin parámetros, con valor retorno
function mensaje(){
    return "Lindo Día!!"
}
mensaje_saludo = mensaje()
alert(mensaje_saludo)

//Con parámetros, con retorno
let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(numero1, numero2);
alert("El resultado es: " + resultado);
