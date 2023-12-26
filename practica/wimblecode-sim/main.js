// TODO: Separar código en más funciones. Quizás en modulos tambien?
let players = []

const playerStatus = {
  WAITING: 'waiting',
  PLAYING: 'playing',
  DEUCE: 'deuce',
  ADVANTAGE: 'advantage',
  WINNER: 'winner',
  LOSER: 'loser',
}
const gameStatus = {
  WAITING: 'waiting',
  STARTED: 'started',
  FINISHED: 'finished',
}

const wimblecode = () => {
  const createMatch = (player1, player2) => {
    if (players.length === 0) {
      gameNumber = 'game1'
      // Permitir solo 4 participantes.
    } else if (Object.keys(players[0]).length === 2) {
      return new Error('No se aceptan más inscripciones al torneo.')
    } else {
      gameNumber = 'game' + String(Object.keys(players[0]).length + 1)
    }
    players = [
      {
        ...players[0],
        [gameNumber]: {
          player1: { name: player1, points: 0, rounds: 0, status: 'waiting' },
          player2: { name: player2, points: 0, rounds: 0, status: 'waiting' },
          status: 'waiting',
        },
      },
    ]
    return players
  }

  /**
   * ! Esta función se encarga de dar puntos a un jugador
   * ! pero también esta encargandose de decidir un ganador.
   *
   * TODO: Separar la función de ganar/perder en otra función
   */
  const pointWonBy = (playerName) => {
    const games = players[0]
    let currentGame = ''

    if (games.game1.status === gameStatus.WAITING || games.game1.status === gameStatus.STARTED) {
      currentGame = 'game1'
      games.game1.status = gameStatus.STARTED
    } else {
      currentGame = 'game2'
      games.game1.status = gameStatus.STARTED
    }
    if (games[currentGame].status === gameStatus.FINISHED) {
      return new Error('Ya hay un ganador en este partido.')
    }
    if (games[currentGame].player1.status === playerStatus.WAITING) {
      games[currentGame].player1.status = playerStatus.PLAYING
      games[currentGame].player2.status = playerStatus.PLAYING
    }

    if (games[currentGame].player1.name === playerName) {
      if (games[currentGame].player1.points < 30) {
        games[currentGame].player1.points += 15
      } else if (games[currentGame].player1.points === 30) {
        games[currentGame].player1.points += 10
        games[currentGame].player1.status = playerStatus.DEUCE
      } else if (games[currentGame].player1.points === 40) {
        if (games[currentGame].player2.points <= 30) {
          games[currentGame].player1.status = playerStatus.WINNER
          games[currentGame].player2.status = playerStatus.LOSER
          games[currentGame].status = gameStatus.FINISHED
        } else if (games[currentGame].player2.points === 40) {
          games[currentGame].player1.points += 1
          games[currentGame].player1.status = playerStatus.ADVANTAGE
        }
      } else if (games[currentGame].player1.points > 40 && games[currentGame].player1.points < 47) {
        games[currentGame].player2.points += 1
        if (games[currentGame].player1.points === 46) {
          games[currentGame].player1.status = playerStatus.WINNER
          games[currentGame].player2.status = playerStatus.LOSER
          games[currentGame].status = gameStatus.FINISHED
        }
        if (
          games[currentGame].player1.points > games[currentGame].player2.points &&
          !games[currentGame].player1.points - games[currentGame].player2.points === 2
        ) {
          games[currentGame].player1.status = playerStatus.ADVANTAGE
        }
        if (games[currentGame].player1.points - games[currentGame].player2.points === 2) {
          games[currentGame].player1.status = playerStatus.WINNER
          games[currentGame].player2.status = playerStatus.LOSER
          games[currentGame].status = gameStatus.FINISHED
        }
      }
    }

    if (games[currentGame].player2.name === playerName) {
      if (games[currentGame].player2.points < 30) {
        games[currentGame].player2.points += 15
      } else if (games[currentGame].player2.points === 30) {
        games[currentGame].player2.points += 10
        games[currentGame].player2.status = playerStatus.DEUCE
      } else if (games[currentGame].player2.points === 40) {
        if (games[currentGame].player1.points < 30) {
          games[currentGame].player2.status = playerStatus.WINNER
          games[currentGame].player1.status = playerStatus.LOSER
          games[currentGame].status = gameStatus.FINISHED
        } else if (games[currentGame].player1.points >= 40) {
          if (games[currentGame].player2.points > games[currentGame].player1.points) {
            games[currentGame].player2.points += 1
            games[currentGame].player2.status = playerStatus.ADVANTAGE
          }
        }
      } else if (games[currentGame].player2.points > 40 && games[currentGame].player2.points < 47) {
        games[currentGame].player2.points += 1
        if (games[currentGame].player2.points === 47) {
          games[currentGame].player2.status = playerStatus.WINNER
          games[currentGame].player1.status = playerStatus.LOSER
          games[currentGame].status = gameStatus.FINISHED
        }
        if (
          games[currentGame].player2.points > games[currentGame].player1.points &&
          !games[currentGame].player2.points - games[currentGame].player1.points === 2
        ) {
          games[currentGame].player2.status = playerStatus.ADVANTAGE
        }
        if (games[currentGame].player2.points - games[currentGame].player1.points === 2) {
          games[currentGame].player2.status = playerStatus.WINNER
          games[currentGame].player1.status = playerStatus.LOSER
          games[currentGame].status = gameStatus.FINISHED
        }
      }
    }

    return games
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

try {
  const game = wimblecode()
  game.createMatch('Player 1', 'Player 2')
  game.createMatch('Player 3', 'Player 4')
  console.log(game.pointWonBy('Player 2'))
  console.log(game.pointWonBy('Player 2'))
  console.log(game.pointWonBy('Player 1'))
  console.log(game.pointWonBy('Player 1'))
  console.log(game.pointWonBy('Player 2'))
  console.log(game.pointWonBy('Player 1'))
  console.log(game.pointWonBy('Player 1'))
  console.log(game.pointWonBy('Player 2'))
  console.log(game.pointWonBy('Player 2'))
} catch (e) {
  console.log(e)
}
