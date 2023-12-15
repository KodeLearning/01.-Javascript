import calculator, { sumScores } from './utils.js'

const students = []

const total = students.map((student) => ({
  nameAge: `${student.name}-${student.age}`,
  nota: sumScores(student.courses),
}))

const miCalculadora = calculator()
console.log(miCalculadora.sumar(5))
console.log(miCalculadora.restar(2))
console.log(miCalculadora.multiplicar(4))
console.log(miCalculadora.dividir(2))
console.log(miCalculadora.sumar(10))
console.log(miCalculadora.total())
