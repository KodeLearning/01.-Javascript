export const newCatalog = () => {
  let songs = []
  let songs_info = {}

  const addSong = () => {
    const name = prompt('¿Cual es el nombre de la canción?')
    const genre = prompt('Género')
    const duration = prompt('Duración')
    songs_info = { name, genre, duration }
    songs.push(songs_info)
    console.log(listSongs())
  }

  const listSongs = () => {
    return songs
  }

  const findByGenre = () => {
    let genreSongs = []
    const genre = prompt('¿Qué género buscas?')

    songs
      .filter((item) => item.genre.toLowerCase() === genre.toLowerCase())
      .map((element) => {
        genreSongs.push(element)
        return genreSongs
      })
  }

  const calcAverageSongDuration = () => {
    return
  }

  return {
    addSong,
    listSongs,
    findByGenre,
    calcAverageSongDuration,
  }
}

const catalog = newCatalog()

window.addSong = function () {
  catalog.addSong()
}
window.listSongs = function () {
  catalog.listSongs()
}
window.findByGenre = function () {
  catalog.findByGenre()
}
