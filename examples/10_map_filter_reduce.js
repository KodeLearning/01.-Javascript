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
/*const doubleListV1 = (list) => {
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
console.log(double)*/
console.clear()

const foo = (number) => number * 2
const newArrayUpd = numbers.map(foo)
const newArrayOg = numbers.map((number) => number * 2)
console.clear()
console.log(newArrayOg)
console.log(numbers)

const filter45 = (arr) => {
  const newList = []
  for (const element of arr) {
    if (element !== 45) newList.push(element)
  }

  return newList
}

const newList = numbers.filter((number) => number != 4)

console.clear()
console.log(filter45(newList))
console.log(numbers)
console.clear()

/** 
const nums = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false]

 const classifyNumbers = (items) => {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = 0; i < items.length; i++) {
    current = items[i];
    if (typeof current === "number") {
      if (current % 2 === 0) {
        evenNumbers.push(current);
      } else {
        oddNumbers.push(current);
      }
    }
  }

  return { evenNumbers, oddNumbers };
};

console.log(classifyNumbers(nums));
**/

const nums = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false]

const classifyNumbers = (items) => {
  isEven = (item) => typeof item === 'number' && item % 2 === 0

  const evenNumbers = items.filter((item) => isEven(item))
  const oddNumbers = items.filter((item) => {
    return !isEven(item)
  })

  return { evenNumbers, oddNumbers }
}

console.log(classifyNumbers(nums))
console.clear()
