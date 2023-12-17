let players = []
const wimblecode = () => {
  let winners = {}
  let gameNumber = ''

  const createMatch = (player1, player2) => {
    if(players.length ===0) {
      gameNumber = 'game1'
    } else {
      gameNumber = 'game' + String(players.length + 2)
    }
    for (const game in players[0]) {
      console.log('Games:', game)
    }
    players = [{
      [gameNumber]: {
        player1: { name: player1, points: 0, rounds: 0 },
        player2: { name: player2, points: 0, rounds: 0 },
        winner: null
      },
      game2: {
        player3: { name: player1, points: 0, rounds: 0 },
        player4: { name: player2, points: 0, rounds: 0 },
        winner: null
      }
    }]
    return players
  }

  const pointWonBy = (playerName) => {
    const actualPlayers = players.g1
    for (const key in actualPlayers) {
      if(playerName === actualPlayers[key].name) {
        actualPlayers[key].points += 15
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
console.log(players)
console.log(game.createMatch('Jonny', 'Uri'))
