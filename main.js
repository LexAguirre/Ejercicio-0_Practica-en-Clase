"use strict";

import dado from "./claseDado.js";
import pagoTrabajo from "./claseSueldo.js";
import Rectangulo from "./claseRectangulo.js";

let classDado = new dado();
let trabajo = new pagoTrabajo();
let calculos = new Rectangulo(10, 20);

console.log("Clase del Martes 17 de Agosto");
console.log("Ejercicios con Sueldos");
console.log(trabajo.sueldo());

console.log("Practica del Jueves 19 de Agosto");
console.log("Ejercicios de Rectangulos");
console.log(calculos.obtenerArea());
console.log(calculos.obtenerPerimetro());

console.log("Clase del Martes 24 de Agosto");
console.log("Ejercicios con Dados");
console.log(classDado.count());
//console.log(classDado.jugar());
//onsole.log(classDado.demostracion());
