console.log('Bucles')
console.log('-----------------')

const fruits = ['apple', 'banana', 'kiwi', 'watermelon', 'orange']

// Bucle normal
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
  const fruit = fruits[i]
  /*
  if(fruit.toLowerCase() == 'kiwi') {
    console.log('***')
  } else {
    console.log(fruit)
  }
  */
  fruit.toLocaleLowerCase === 'kiwi' ? console.log('***') : console.log(fruit)
}

// Bucle con condición
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  console.log(`Index ${i}`)
  if (fruit.toLocaleLowerCase() === 'kiwi') {
    // break;
    continue
  } else {
    console.log(fruit)
  }
  console.log('Final de interación')
}

let fruitsNoKiwi = []
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  if (fruit.toLowerCase() !== 'kiwi') {
    fruitsNoKiwi.push(fruit)
  }
}
console.clear()
console.log(fruits)
console.log(fruitsNoKiwi)

if (!fruitsNoKiwi.includes('kiwi')) {
  console.log('Mariano feliz!')
}

// Array dentro de Array
const matrix = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9], // 2
]

console.log(matrix[1]) // [4, 5, 6]

for (let i = 0; i < matrix.length; i++) {
  const rows = matrix[i] // [1, 2, 3]
  console.log(rows)
  for (let j = 0; j < rows.length; j++) {
    const columns = rows[j]
    console.log(columns)
  }
}

// While
let index = 0
while (index < 4) {
  console.log('Dentro del while')
  if (index < 100) {
    index = index + 1
  } else {
    index = index + 100
  }
}

const presents = []
while (true) {
  const newPresent = prompt('Añadir regalo: ')
  if (!newPresent) break

  presents.push(newPresent)
  console.log(`Lista de regalos: ${presents.join(', ')}`)
  // continue y break
}
