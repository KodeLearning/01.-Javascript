// Este programa simula una llamada asincrónica para obtener un usuario
const obtenerUsuario = (id) => {
  return new Promise((resolve) => {
    let usuario
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: 'John Doe' }
      }
      resolve(usuario)
    }, 2000)
  })
}

obtenerUsuario(1)
  .then((data) => console.log(data))
  .catch((e) => console.log(e))
