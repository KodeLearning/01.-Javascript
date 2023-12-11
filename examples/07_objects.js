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

console.log(car)
