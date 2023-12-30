import { playerStatus, gameStatus, tourneyStatus } from './helpers/statusHelper.js'

// TODO: Separar código en más funciones. Quizás en modulos tambien?
let players = []
let currentGame = ''

const wimblecode = () => {
  const createMatch = (player1, player2) => {
    let gameName = ''
    if (players.length === 0) {
      gameName = 'game1'
    } else {
      gameName = 'game' + String(Object.keys(players[0]).length + 1)
    }
    players = [
      {
        ...players[0],
        [gameName]: {
          player1: { name: player1, points: 0, rounds: 0, status: 'waiting' },
          player2: { name: player2, points: 0, rounds: 0, status: 'waiting' },
          status: 'waiting',
        },
      },
      {
        status: 'closed'
      }
    ]
    return players
  }

  const checkVictory = (games, currentGame) => {
    let victory = false
    const diffRounds = games[currentGame].player2.rounds - games[currentGame].player1.rounds

    if ((games[currentGame].player2.rounds >= 4 && diffRounds >= 2) || games[currentGame].player2.rounds === 7) {
      games[currentGame].player2.status = playerStatus.WINNER
      games[currentGame].player1.status = playerStatus.LOSER
      games[currentGame].status = gameStatus.FINISHED
      victory = true
    }
    return victory
  }

  const winRound = (gamesList, winner, loser, currentGame) => {
    // Gana la ronda
    winner.rounds += 1
    winner.points = 0
    loser.points = 0

    checkVictory(gamesList, currentGame)
  }

  /**
   * ! Esta función se encarga de dar puntos a un jugador pero:
   * ! 1. Esta gestionando victorias
   * ! 2. Esta gestionando qué partida esta activa
   *
   * TODO: Separar la función de ganar/perder en otra función
   */

  const selectCurrentGame = (gamesList) => {
    let gameNumber = 1

    if (gamesList[currentGame] === undefined) {
      currentGame = 'game' + String(gameNumber)
    } else {
      const numberFound = currentGame.match(/\d+/g)
      // ! Esto sería un problema si hay 10 o más partidos
      gameNumber = Number(numberFound[0])
    }
    if (gamesList[currentGame].status === gameStatus.WAITING) {
      gamesList[currentGame].status = gameStatus.STARTED
    } else if (gamesList[currentGame].status === gameStatus.FINISHED) {
      currentGame = 'game' + String(gameNumber + 1)
      gamesList[currentGame].status = gameStatus.STARTED
    }
    if (gamesList[currentGame].status === gameStatus.FINISHED) {
      return new Error('Ya hay un ganador en este partido.')
    }
  }

  const pointWonBy = (playerName) => {
    const games = players[0]
    
    selectCurrentGame(games)
    
    if (games[currentGame].player1.status === playerStatus.WAITING) {
      games[currentGame].player1.status = playerStatus.PLAYING
      games[currentGame].player2.status = playerStatus.PLAYING
    }
    
    
    const player1 = games[currentGame].player1
    const player2 = games[currentGame].player2

    if (player1.name === playerName) {
      if (player1.points < 30) {
        player1.points += 15
      } else if (player1.points === 30) {
        player1.points += 10
        if (player2.points < 30) {
          winRound(games, player1, player2, currentGame)
        } else {
          player1.status = playerStatus.DEUCE
        }
      } else if (player1.points === 40) {
        if (player2.points <= 30) {
          winRound(games, player1, player2, currentGame)
        } else if (player2.points === 40) {
          player1.points += 1
          player1.status = playerStatus.ADVANTAGE
        }
      } else if (player1.points > 40 && player1.points < 47) {
        player2.points += 1
        if (player1.points === player2.points) {
          player1.points += 1
          player1.status = playerStatus.ADVANTAGE
        } else if (player1.points < player2.points) {
          player1.points += 1
          player1.status = playerStatus.DEUCE
          player2.status = playerStatus.DEUCE
        }
        if (player1.points === 46) {
          winRound(games, player1, player2, currentGame)
        }
        if (
          player1.points > player2.points &&
          !player1.points - player2.points === 2
        ) {
          player1.status = playerStatus.ADVANTAGE
        }
        if (player1.points - player2.points === 2) {
          winRound(games, player1, player2, currentGame)
        }
      }
    } else if (player2.name === playerName) {
      if (player2.points < 30) {
        player2.points += 15
      } else if (player2.points === 30) {
        player2.points += 10
        if (player1.points < 30) {
          winRound(games, player2, player1, currentGame)
        } else {
          player2.status = playerStatus.DEUCE
        }
      } else if (player2.points === 40) {
        if (player1.points <= 30) {
          winRound(games, player2, player1, currentGame)
        } else if (player1.points === 40) {
          player2.points += 1
          player2.status = playerStatus.ADVANTAGE
        }
      } else if (player2.points > 40 && player2.points < 47) {
        player1.points += 1
        if (player2.points === player1.points) {
          player2.points += 1
          player2.status = playerStatus.ADVANTAGE
        } else if (player2.points < player1.points) {
          player2.points += 1
          player2.status = playerStatus.DEUCE
          player1.status = playerStatus.DEUCE
        }
        if (player2.points === 46) {
          winRound(games, player2, player1, currentGame)
        }
        if (
          player2.points > player1.points &&
          !player2.points - player1.points === 2
        ) {
          player2.status = playerStatus.ADVANTAGE
        }
        if (player2.points - player1.points === 2) {
          winRound(games, player2, player1, currentGame)
        }
      }
    } else {
      return new Error(playerName + ' no esta participando.')
    }

    return games[currentGame]
  }

  const getCurrentRoundScore = () => {
    const games = players[0]
    let currentRoundScore
    for (const game in games) {
      if (games[game].status === 'started') {
        currentRoundScore =
          games[game].player1.name + ' ' + games[game].player1.points + ' - ' + games[game].player2.points + ' ' + games[game].player2.name
      } else {
        currentRoundScore = 'No hay partidos iniciados.'
      }
    }

    return currentRoundScore
  }
  const getRoundsScore = () => {
    const games = players[0]
    let roundScore
    for (const game in games) {
      if (games[game].status === 'started') {
        roundScore =
          games[game].player1.name + ' ' + games[game].player1.rounds + ' - ' + games[game].player2.rounds + ' ' + games[game].player2.name
      }
    }

    return roundScore
  }

  return {
    createMatch, // Inicializa dos jugadores que van a competir
    pointWonBy, // Otorga 1 punto a uno de los jugadores
    getCurrentRoundScore, // Muestra los puntos actuales de la ronda iniciada
    getRoundsScore, // Muestra el total de juegos ganados por los dos jugadores
  }
}

try {
  const game = wimblecode()
  console.log(game.createMatch('Player 1', 'Player 2'))
  console.log(game.createMatch('Player 3', 'Player 4'))
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 2')
  game.pointWonBy('Player 3')
  console.log('currentRoundScore', game.getCurrentRoundScore())
  console.log('roundScore', game.getRoundsScore())
} catch (e) {
  console.log(e)
}
