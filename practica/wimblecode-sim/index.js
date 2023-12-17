let players = []
const wimblecode = () => {
  let winners = {}
  let gameNumber = ''

  const createMatch = (player1, player2) => {
    if (players.length === 0) {
      gameNumber = 'game1'
    } else {
      gameNumber = 'game' + String(players.length + 1)
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
    const actualPlayers = players[0].game1
    for (const key in actualPlayers) {
      if (actualPlayers[key] && playerName === actualPlayers[key].name) {
        if (actualPlayers[key].points < 30) {
          actualPlayers[key].points += 15
        } else if (actualPlayers[key].points === 30) {
          actualPlayers[key].points += 10
        } else if (actualPlayers[key].points >= 40 && actualPlayers[key].points < 44) {
          actualPlayers[key].points += 1
        } else if (actualPlayers[key].points === 44) {
          actualPlayers[key].points = 0
          actualPlayers[key].rounds += 1
          console.log(actualPlayers)
        } else if (actualPlayers[key].rounds === 2) {
          actualPlayers.winner = playerName
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
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
game.pointWonBy('David')
