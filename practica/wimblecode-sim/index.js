const wimblecode = () => {
  let players = {}
  let winners = {}

  const createMatch = (player1, player2) => {
    players = {
      g1: {
        player1: { name: player1, points: 0, rounds: 0 },
        player2: { name: player2, points: 0, rounds: 0 },
      },
    }
    console.log(players)
    return players
  }

  const pointWonBy = (playerId) => {}
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
