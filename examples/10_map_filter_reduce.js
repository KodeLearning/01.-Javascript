/*
Funciones Puras: Las funciones puras son aquellas que siempre producen el mismo resultado para los mismos argumentos y no tienen efectos secundarios observables. No modifican variables fuera de su ámbito y no alteran el estado global.
*/

// pura
const sumar = (a, b) => a + b

console.log(sumar(1, 3))
console.log(sumar(1, 3))
console.log(sumar(1, 3))
console.log(sumar(1, 3))
console.log(sumar(1, 3))

let num = 0
const impureSumar = (num1, num2) => {
  num = num + num1 + num2
  return num
}

console.log(impureSumar(1, 3))
console.log(impureSumar(1, 3))
console.log(impureSumar(1, 3))
console.log(impureSumar(1, 3))

const datos = []

const addElement = (arr, newElement) => {
  const newArray = structuredClone(arr)
  newArray.push(newElement)
  return newArray
}

console.log(addElement(datos, 'Elemento 1')) // ['Elemento 1']
console.log(addElement(datos, 'Elemento 1')) // ['Elemento 1']

/*
Inmutabilidad: La inmutabilidad implica que los datos no deben ser modificados una vez que se crean. En JavaScript, se alienta el uso de estructuras de datos inmutables, lo que significa que se crean nuevas instancias en lugar de modificar las existentes.
*/

const user = {
  username: 'keepcoding',
}

const user2 = structuredClone(user)

user2.role = 'ADMIN'

console.log(user)

const numbers = [22, 45, 63, 4, 50, 6]

let double = []

const doubleList = (list) => {
  const double = []
  for (let element of list) {
    double.push(element * 2)
  }
  return double
}
// double = doubleList(numbers);
const newArray = numbers.map((number) => number * 2)
console.log(newArray)
console.clear()

const filter45 = (arr) => {
  const newList = []
  for (let element of arr) {
    if (element !== 45) newList.push(element)
  }
  return newList
}

const newList = numbers.filter((number) => number !== 45)

console.log(newList)
console.log(numbers)

const nums = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false]

const classifyNumbers = (items) => {
  const isEven = (item) => typeof item === 'number' && item % 2 === 0

  const evenNumbers = items.filter(isEven)
  const oddNumbers = items.filter((item) => {
    return !isEven(item)
  })

  return { evenNumbers, oddNumbers }
}

// console.log(classifyNumbers(nums));

const multiplicador = (primerValor) => {
  return (item) => {
    return item * primerValor
  }
}

const multiplicadorX2 = multiplicador(2)
const multiplicadorX3 = multiplicador(3)
console.log(multiplicadorX2)

numbers.map((item) => multiplicadorX2(item))
numbers.map(multiplicadorX3)

const element = numbers.find((item) => {
  return item === 444
})

if (element !== undefined) {
  console.log(element)
}

numbers.forEach((item) => {
  console.log(item)
  return 'Hola'
})

const resultado = numbers.filter((item) => item > 20).map((item) => item * 2)
console.log(resultado)

const transactions = [
  {
    id: 'trx001',
    amount: 100,
    description: 'Splurge on a fancy gadget',
    category: 'Electronics',
  },
  {
    id: 'trx002',
    amount: 50,
    description: 'Treat yourself to a cozy meal',
    category: 'Food',
  },
  {
    id: 'trx003',
    amount: 200,
    description: 'Indulge in a shopping spree',
    category: 'Fashion',
  },
  {
    id: 'trx004',
    amount: 75,
    description: 'Explore a new bookshop',
    category: 'Books',
  },
  {
    id: 'trx005',
    amount: 120,
    description: 'Upgrade your workout gear',
    category: 'Fitness',
  },
]

/**
 * FIND
 * Devuelve el primer elemento encontrado
 * aunque pudieran haber más coincidencias.
 */
const getTransaction = (list, id) => {
  const transaction = list.find((item) => {
    return item.id === id
  })
  return transaction
}

console.log(getTransaction(transactions, 'trx001'))
