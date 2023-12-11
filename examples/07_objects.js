console.log('Objects')

// const product = new Object()
const product = {
  name: 'Air Jordan',
  price: 123,
  stock: null,
}

const fordMustang = {
  brand: 'Ford',
  year: 1969,
  model: 'Mustang',
  firstOwner: 'Inmortia',
  stock: null,
  country: {
    name: 'USA',
    code: 'us',
  },
  owners: ['Inmortia', 'Elon', 'Jordan'],
  'second-owner': 'Elon',
}

const cars = [fordMustang]

console.log(cars)

const key = 'year'

console.log(fordMustang[key])
console.clear()

const keyId = 'newKey'

const car = {
  title: 'Toyota',
  year: 1990,
  //newKey: 12,
  [keyId]: 12,
}

console.log(car)
console.log(car[keyId])

car.title = 'Jaguar'
car.year = 1970
car.title = car.title.toUpperCase()

delete car.year

const removeKeys = ['year', 'title']
for (let index = 0; index < removeKeys.length; index++) {
  const keyToRemove = removeKeys[index]
  delete car[keyToRemove]
}

// Info
const shows = [
  {
    id: 1,
    name: 'Under the dome',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
  },
  {
    id: 2,
    name: 'Game of thrones',
    genres: ['Drama', 'Thriller'],
  },
]

let showTemplate = ''
for (let i = 0; i < shows.length; i++) {
  const show = shows[i]
  // Mostrar
  showTemplate =
    showTemplate +
    `
    <h2>${show.name}</h2>
    <p>${show.genres.join(', ')}</p>
  `
}

// Renderizar
document.write(showTemplate)

// Object.keys, Object.values, Object.entries, for..in, JSON.
const stringValue = JSON.stringify(shows)
const showsCopy = shows
console.log(showsCopy === shows)
console.log(shows)
const newShowsArray = JSON.parse(stringValue)
console.log(newShowsArray)

car.year = undefined

console.log(JSON.parse(JSON.stringify(car)))
