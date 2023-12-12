console.log('Functions')

// sayHi();

// 1 definirla
function sayHi() {
  console.log('Hola')
  console.log('Dentro de la función')
}

// sayHi();
function esMayorDeEdad(age) {
  return age >= 18
  /*
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
  */
}

// return;

const users = [
  {
    name: 'user 1',
    age: 30,
  },
  {
    name: 'user 2',
    age: 12,
  },
  {
    name: 'user 3',
    age: 10,
  },
  {
    name: 'user 4',
    age: 50,
  },
]

function displayUser(name) {
  console.log(`${name} es mayor de edad vamos a registrar en la web`)
}

for (let { age, name } of users) {
  // const mayorDeEdad = esMayorDeEdad(age);
  // console.log(mayorDeEdad, age, name);
  if (esMayorDeEdad(age)) {
    displayUser(name)
  }
}

function sum(value1 = 0, value2 = 0) {
  return value1 + value2
}

const suma = function (value1 = 0, value2 = 0, value3 = 0) {
  return value1 + value2 + value3
}

console.log(suma(1, 2))
console.clear()

const crearSaludo = function (nombre) {
  return `Hola ${nombre}`
}

const saludoPersona = crearSaludo

console.log(saludoPersona('Persona'))

// Arrow functions
//-- const sumArrow = (value1 = 0, value2 = 0, value3 = 0) => {
//--  return value1 + value2 + value3
//-- }

const getAdmin = () => ({
  name: 'KeepCoding',
  role: 'ADMIN',
})

//console.log(sumArrow(0, 2))
console.log(getAdmin())
console.log('Final')
console.clear()

// THIS function vs Arrow
const obj = {
  value: 20,
  noArrow: function () {
    console.log(`No arrow function ${this.value}`)
    function insideFunction() {
      console.log('Inside Function', this)
    }

    insideFunction()
  },
}

console.log(obj.noArrow())
console.clear()

/// rest params
const sumArrow = (...params) => {
  console.log(params)
  let result = 0
  for (const num of params) {
    result += num
  }

  return result
}

console.log(sumArrow(1, 2, 3))

const adminUser = {
  name: 'KeepCoding',
  role: 'ADMIN',
  password: 'qwerty123',
}

const getUserInfo = (user) => {
  return { name: user.name, role: user.role }
}

const adminInfo = getUserInfo(adminUser)

console.log(`Usuario: ${JSON.stringify()}`)
console.clear()

const counter = () => {
  let count = 0
  const increment = () => {
    count += 1
  }

  const getCount = () => {
    return count
  }

  return { increment, getCount }
}

const counterBreak = counter()
counterBreak.increment()
counterBreak.increment()
counterBreak.increment()
counterBreak.increment()
console.log(counterBreak.count)

const counterNextClass = counter()
