/**
 * Piedra papel tijera
 * Vamos a preguntar al usuario su jugada, que tiene que ser "piedra", "papel" o "tijera"
 *
 * - Si no es ninguna mostrar un mensaje de "opción incorrecta"
 * - Si el usuario quiere salir que escriba "salir"
 * - El rival siempre va a tener piedra
 * - Implementar la lógica
 *   - "Ganaste tu tienes papel y el rival piedra"
 *   - "Perdiste tu tienes tijeras y el rival piedra"
 *   - "Empate ambos tienen piedra"
 **/

while (true) {
  let choice = prompt('¿Piedra, papel o tijera?')
  choice = choice.toLowerCase()

  if (choice === 'salir') {
    console.log('Ciao :(')
    break
  }

  console.clear()
  if (choice === 'piedra') {
    console.log('CPU sacó piedra!\n¡Empate!')
  } else if (choice === 'papel') {
    console.log('CPU sacó piedra!\n¡Has ganado!')
  } else if (choice === 'tijera') {
    console.log('CPU sacó piedra\n¡Has perdido!')
  } else {
    console.log('Opción incorrecta')
  }
}
