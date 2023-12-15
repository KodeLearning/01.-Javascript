// es modules / commonjs
const calculator = () => {
  let result = 0

  const sumar = (num) => (result += num)
  const restar = (num) => (result -= num)
  const multiplicar = (num) => {
    return (result *= num)
  }
  const dividir = (num) => (result /= num)
  const total = () => result

  return { sumar, restar, multiplicar, dividir, total }
}

export default calculator

export const sumScores = (scores) => {
  return scores.reduce((sum, course) => sum + course.score, 0)
}
