const cargarDatosCB = (cb) => {
  setTimeout(() => {
    console.log('Datos cargados')
    cb(null, ['Dato 1', 'Dato 2'])
  }, 0)
}

const cargarDatosDetalle = (cb) => {
  setTimeout(() => {
    console.log('Datos cargados')
    cb(null, 'Dato 1')
  }, 0)
}

console.log('Hola')

/// 3 formas

// 1 callbacks
// promesas
// async/await
/*
cargarDatosCB((error, datos) => {
  console.log(datos.join(', '));
  if (error) {
    // throw new Error('Error datos');
  }
  cargarDatosDetalle((error, datosDetalle) => {
    console.log(datosDetalle);
    if (error) {

    }
    cargarDatosDetalle((error, datosDetalle) => {
      if (error) {

      }
      console.log(datosDetalle);
      console.log('Fin');
    });
  });
});
*/
// callback hell

// q Bluebird -> Promesas
// Promesas

const downloadUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('downloadUserData')
      resolve('user 1')
    }, 1000)
  })
}
const proccessUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('proccessUserData')
      resolve('user error in proccessUserData')
    }, 2000)
  })
}
const displayUserDashboard = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('proccessUserData')
      resolve()
    }, 2000)
  })
}
console.clear()
const double = (item) => item * 2

downloadUserData()
  .then((datos) => {
    console.log('Finish download user data ', datos)
    return proccessUserData()
  })
  .then(displayUserDashboard)
  .then(() => {
    console.log('End')
  })
  .catch((error) => {
    console.log(error)
  })

/// async / await
// async function main () {}
const main = async () => {
  try {
    const datos = await downloadUserData()
    console.log('Finish download user data async/await ', datos)
    await proccessUserData()
    await displayUserDashboard()
  } catch (error) {
    console.log(error)
  }
}
//
// main();
