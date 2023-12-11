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
