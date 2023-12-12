/**
 * Crea un archivo ejercicio1.js que tenga un objeto usuario con los siguientes campos:
 * - Nombre (el tuyo o inventado)
 * - Apellidos (el tuyo o inventado)
 * - Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
 *   de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
 * - Si estás en busqueda activa con un valor de verdadero o false
 *
 * En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
 * objeto que hemos creado anteriormente.
 */
const user = [
  {
    name: 'David',
    surname: 'Llamas Monras',
    modules: [
      ['git', '2023-11-26'],
      ['Javascript', '2023-12-04'],
      ['HTML / CSS', '2024-01-08'],
      ['SQL', '2024-01-29'],
      ['NodeJS', '2024-02-12'],
      ['FrontEnd con Javascript', '2024-03-04'],
      ['FrontEnd PRO', '2024-04-01'],
      ['Web Components', '2024-04-08'],
      ['Fundamentos React', '2024-04-15'],
      ['TDD con Javascript', '2024-05-06'],
      ['NodeJS Avanzado', '2024-05-13'],
      ['React Avanzado', '2024-06-03'],
      ['Servidores y despliegue', '2024-06-24'],
      ['Proyecto final', '2024-07-15'],
    ],
    LookingForJob: false,
  },
]

for (const data of user) {
  let i = 0
  const modules = data.modules
  while (i < modules.length) {
    if (modules[i][0] == 'Fundamentos React') {
      document.getElementsByTagName('body')[0].style.background = 'black'
      document.getElementsByTagName('body')[0].style.color = 'white'
      document.write(
        `<div style='display: flex; flex-direction: column; padding: 10px; margin: auto; width: 50%; text-align: center; min-height: 100vh; align-items: center; justify-content: center;'>
          <h2>${modules[i][0]}</h2>
          <p>Empieza el ${modules[i][1]}</p>
        </div>`
      )
    }
    i++
  }
}
