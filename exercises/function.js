/**
 *
 * Enunciado: Dada una lista de números, crea dos nuevas listas,
 * una que contenga solo los números impares de la lista original
 * y la otra los pares. Cuidado que la lista puede no contener números.
 *
 * Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false
 *
 **/

const numsData = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false]
const NumTypes = {
  Even: 'even',
  Odd: 'odd',
  Both: 'both',
}

const evenOrOdd = (numList, numType = 'even') => {
  const evenNums = []
  const oddNums = []
  let nums = {}

  for (let i = 0; i < numList.length; i++) {
    const num = numList[i]
    if (typeof num === 'number') {
      if (
        (numType === NumTypes.Even || numType === NumTypes.Both) &&
        num % 2 === 0
      ) {
        evenNums.push(num)
      } else if (
        (numType === NumTypes.Odd || numType === NumTypes.Both) &&
        num % 2 > 0
      ) {
        oddNums.push(num)
      }
    }
  }

  if (numType === NumTypes.Even) {
    nums = { evens: evenNums }
  } else if (numType === NumTypes.Odd) {
    nums = { odds: oddNums }
  } else if (numType === NumTypes.Both) {
    nums = {
      evens: evenNums,
      odds: oddNums,
    }
  }

  return nums
}

console.log(evenOrOdd(numsData, 'both'))
console.clear()

/**
 *
 * SEGUNDO EJERCICIO
 *
 */

const calculadora = () => {
  let current = 0
  const sumar = (num) => (current = current + num)
  const restar = (num) => (current = current - num)
  const multiplicar = (num) => (current = current * num)
  const dividir = (num) => (current = current / num)
  const total = () => current

  return {
    sumar,
    restar,
    multiplicar,
    dividir,
    total,
  }
}

const miCalculadora = calculadora()
console.log(miCalculadora.sumar(5))
console.log(miCalculadora.restar(2))
console.log(miCalculadora.multiplicar(4))
console.log(miCalculadora.dividir(2))
console.log(miCalculadora.sumar(10))
console.log(miCalculadora.total())
