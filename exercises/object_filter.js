/**
 * Ejercicio: Filtrar y transformar un array de objetos
 *
 * Enunciado: Dado un array de objetos que representan libros
 * Filtrar los libros cuyo año de publicación sea posterior a 2000 y luego
 * crear un nuevo array con los títulos de esos libros.
 *
 * titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
 * titulo: 1984 | autor: George Orwell | año: 1949
 * titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
 * titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
 * titulo: El código Da Vinci | autor: Dan Brown | año: 2003
 * titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
 * titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008
 **/

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
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

yearOver2000 = []

for (let i = 0; i < books.length; i++) {
  const book = books[i]
  if (book.year > 2000) {
    yearOver2000.push(book.title)
  }
}

console.log('Libros:', yearOver2000.join(', '))
