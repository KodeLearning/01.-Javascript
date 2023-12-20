let players = []
const wimblecode = () => {
  let winners = {}
  let gameNumber = ''

  const createMatch = (player1, player2) => {
    if (players.length === 0) {
      gameNumber = 'game1'
    } else {
      gameNumber = 'game' + String(Object.keys(players[0]).length + 1)
    }
    players = [
      {
        ...players[0],
        [gameNumber]: {
          player1: { name: player1, points: 0, rounds: 0 },
          player2: { name: player2, points: 0, rounds: 0 },
          winner: null,
        },
      },
    ]
    return players
  }

  const pointWonBy = (playerName, game = 'next') => {
    let actualPlayers = {}
    if (game !== 'next') {
      actualPlayers = players[0][game]
      console.log('A', actualPlayers)
    } else {
      const keys = Object.keys(players[0])
      actualPlayers = keys[keys.length - 1]
    }

    for (const key in actualPlayers) {
      if (actualPlayers[key] && playerName === actualPlayers[key].name) {
        if (actualPlayers[key].rounds === 2) {
          actualPlayers.winner = playerName
        } else {
          if (actualPlayers[key].points < 30) {
            actualPlayers[key].points += 15
          } else if (actualPlayers[key].points === 30) {
            actualPlayers[key].points += 10
          } else if (actualPlayers[key].points >= 40 && actualPlayers[key].points < 44) {
            actualPlayers[key].points += 1
          } else if (actualPlayers[key].points === 44) {
            actualPlayers[key].points = 0
            actualPlayers[key].rounds += 1
          }
        }
      }
    }
  }

  /**
   * La función debería llamarse "getCurrentPointsScore".
   * Según entiendo, el objetivo de esta función es mostrar
   * la puntuación actual del partido, que hayan 2 funciones
   * con el mismo nombre me lo ha hecho un poco lioso.
   *
   * Esta función debe mostrar la puntuación o deuce/advantage en caso
   * de estar en empate.
   */
  const getCurrentRoundScore = () => {
    for (const player of players) {
      const gameNumbers = Object.keys(player)

      for (const gameNumber of gameNumbers) {
        const selectedGame = player[gameNumber]
        console.log(selectedGame)
        if (selectedGame.winner === null) {
          return player[gameNumber]
        }
      }
    }

    return null
  }

  /**
   * Esta función pretende mostrar cuantas rondas ha ganado
   * cada jugador del último partido sin ganador.
   */
  const getRoundsScore = () => {
    const currentGame = getCurrentRoundScore()

    return (
      currentGame.player1.name +
      ' ' +
      String(currentGame.player1.rounds) +
      ' - ' +
      currentGame.player2.name +
      ' ' +
      String(currentGame.player2.rounds)
    )
    console.log(currentGame)
  }

  return {
    createMatch, // Inicializa dos jugadores que van a competir
    pointWonBy, // Otorga 1 punto a uno de los jugadores
    getCurrentRoundScore, // Muestra los puntos actuales de la ronda iniciada
    getRoundsScore, // Muestra el total de juegos ganados por los dos jugadores
  }
}

const game = wimblecode()

console.log(game.createMatch('David', 'Ali'))
game.pointWonBy('David', 'game1') // 15
game.pointWonBy('David', 'game1') // 30
game.pointWonBy('David', 'game1') // 40
game.pointWonBy('David', 'game1') // 41 | Debería ganar
game.pointWonBy('David', 'game1') // 42
game.pointWonBy('David', 'game1') // 43
game.pointWonBy('David', 'game1') // 44
game.pointWonBy('David', 'game1') // 15 | 1 ronda
game.pointWonBy('David', 'game1') // 30
game.pointWonBy('David', 'game1') // 40
game.pointWonBy('David', 'game1') // 41
game.pointWonBy('David', 'game1') // 42
game.pointWonBy('David', 'game1') // 43
game.pointWonBy('David', 'game1') // 44
game.pointWonBy('David', 'game1') //
game.pointWonBy('David', 'game1') //
game.pointWonBy('David', 'game1') //
console.log(game.createMatch('Jonny', 'Uri'))
game.pointWonBy('Uri', 'game2') //
console.log(game.getCurrentRoundScore())
console.log(game.getRoundsScore())
