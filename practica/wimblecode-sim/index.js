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
  const getCurrentRoundScore = () => {}
  const getRoundsScore = () => {}

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
