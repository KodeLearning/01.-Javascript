console.log('Destructuring + spread operator')

const { year, author } = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
}

const books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
  },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
  { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
]

let yearOver2000 = []

for (let i = 0; i < books.length; i++) {
  const { year, title } = books[i]
  if (year > 2000) {
    yearOver2000.push(title)
  }
}

const [orwell, { title }] = books

console.log(orwell, title)

const twilight = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 }

console.log(Object.entries(twilight))

for (const keyAndValue of Object.entries(twilight)) {
  console.log(keyAndValue)
}
console.clear()

const user = {
  role: 'ADMIN',
  username: 'keepcoding',
  courses: ['nodejs', 'html'],
}

// Muta el objeto por lo que user tambien es igual a studentUser
// - const studentUser = user

/**
 * Forma correcta para clonar sin modificar el objeto inicial
 * Hace copia profunda, método más seguro pero hay que
 * vigilar compatibilidades
 **/
//  -- const studentUser = structuredClone(user)

/**
 * Forma algo más peligrosa de clonar sin destruir el objeto inicial
 * Destruye undefined y funciones
 **/
// -- const studentUser = JSON.parse(JSON.stringify(user))

/**
 * (SPREAD) Método más común
 * No clona más allá del primer nivel
 **/
const studentUser = { ...user } /// Object.assign({}, user) # Versión antigua

studentUser.role = 'STUDENT'
studentUser.username = 'David'
console.log(studentUser)

console.log(user)

if (user.role === 'ADMIN' && user.username === 'keepcoding') {
  console.log('Empecemos curso')
} else {
  console.log('No hay admin')
}

const booksNoHungerGames = [...books] /// [].concat(books) # Versión antigua

booksNoHungerGames.pop()
console.log(books)
console.log(booksNoHungerGames)
