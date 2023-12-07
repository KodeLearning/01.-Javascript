/**
 * Enunciado: Dada una lista de números, crea dos
 * nuevas listas, una que contenga solo los
 * números impares de la lista original y la otra
 * los pares. Cuidado que la lista puede no
 * contener números.
 *
 * Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false
 */

const list = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN]
let even_list = []
let odd_list = []
let trash = []

for (let i = 0; i < list.length; i++) {
  const element = list[i]

  if (typeof element === 'number') {
    if (element % 2 === 0) {
      even_list.push(element)
    } else {
      odd_list.push(element)
    }
  }
}

console.log(`Pares: ${even_list}`)
console.log(`Impares: ${odd_list}`)

/**
 * Crear un array bidimensional con 5 columnas y
 * con 3 filas como las que aparecen abajo
 *
 * --*--
 * -***-
 * *****
 *
 * Luego de definirlo recorrerlo para que se
 * pinte como en el dibujo
 **/

const treeBase = [
  ['-', '-', '*', '-', '-'],
  ['-', '*', '*', '*', '-'],
  ['*', '*', '*', '*', '*'],
]
let row = []
let column = []
let tree = ''

for (let i = 0; i < treeBase.length; i++) {
  row = treeBase[i]
  for (let j = 0; j < row.length; j++) {
    column = row[j]
    tree += column
  }
  tree += '\n'
}

console.log(tree)
