/********************************************************************************
 *                            FUNCIONES PURAS                                   *
 ********************************************************************************
 * Las funciones puras son aquellas que siempre                                 *
 * producen el mismo resultado para los mismos argumentos                       *
 * y no tienen efectos secundarios observables.                                 *
 *                                                                              *
 * No modifican variables fuera de su ámbito y no alteran el estado global.     *
 *******************************************************************************/

// Pura
const sumar = (a, b) => a + b

console.log(sumar(1, 3))
console.log(sumar(1, 3))
console.log(sumar(1, 3))
console.log(sumar(1, 3))

// Impura
let num = 0
const impureSum = (num1, num2) => {
  num = num + num1 + num2
  return num
}

console.log(impureSum(1, 3))
console.log(impureSum(1, 3))
console.log(impureSum(1, 3))
console.log(impureSum(1, 3))

const datos = []

const addElement = (arr, newElement) => {
  arr.push(newElement)
  return arr
}

console.log(addElement(datos, 'Elemento 1'))
console.log(addElement(datos, 'Elemento 1'))

/********************************************************************************
 *                            INMUTABILIDAD                                     *
 ********************************************************************************
 * La inmutabilidad impplica que los datos no deben ser modificados             *
 * cada vez que se crean. En Javascript, se alienta el uso de estructuras       *
 * de datos inmutables lo que significa que se crean nuevas instancias          *
 * en lugar de modificar las existentes.                                        *
 *******************************************************************************/

const user = {
  username: 'KeepCoding',
}

const user2 = structuredClone(user)
user2.role = 'ADMIN'

console.log(user)

const numbers = [1, 2, 3, 4, 5, 6]
const double = []

// Modifica la lista que recibe, no es correcto.
const doubleListV1 = (list) => {
  for (const element of list) {
    list.push(element * 2)
  }
}

doubleListV1(numbers)

// Añado las modificaciones en un array nuevo, es correcto.
const doubleListV2 = (list) => {
  const double = []
  for (const element of list) {
    double.push(element * 2)
  }
  return double
}

double = doubleListV2(numbers)
console.log(double)
