/**
 * Ejercicio 2: Crea y muestra el tipo de estas variables:

Años: 60;
Jugador: Jordan;
Dorsal: 23;
Pertenece al salon de la fama: Sí
Equipo actual: ninguno

Y muestra un mensaje como este

"Soy Jordan de 35 años ahora mi equipo es: ninguno"
 */

let age = 60;
let player = "Jordan";
let number = 23;
let hallOfFame = true;
let team = "Ninguno";

console.log(`Edad: ${typeof age}`);
console.log(`Jugador: ${typeof player}`);
console.log(`Dorsal: ${typeof number}`);
console.log(`Salón de la fama: ${typeof hallOfFame}`);
console.log(`Equipo: ${typeof team}`);

const message = `Soy ${player} de ${age} años ahora mi equipo es: ${team}`;

console.log(message);
