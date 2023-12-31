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

  const setupGame = (gamesList) => {
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

    if (gamesList[currentGame].player1.status === playerStatus.WAITING) {
      gamesList[currentGame].player1.status = playerStatus.PLAYING
      gamesList[currentGame].player2.status = playerStatus.PLAYING
    }
  }

  const getCurrentPlayer = (playerName, homePlayer, visitorPlayer) => {
    console.log(playerName, homePlayer.name, visitorPlayer.name)
    return homePlayer.name === playerName ? homePlayer :
            visitorPlayer.name === playerName ? visitorPlayer : null
  }

  const pointWonBy = (playerName) => {
    const games = players[0]
    setupGame(games)

    const homePlayer = games[currentGame].player1
    const visitorPlayer = games[currentGame].player2
    const player = getCurrentPlayer(playerName, homePlayer, visitorPlayer)

    for (let i = 0; i < Object.keys(games[currentGame]).length; i++) {
      if(player.name === playerName) {
        if (player.points < 30) {
          player.points += 15
        } else if (player.points === 30) {
          player.points += 10
          if (visitorPlayer.points < 30) {
            winRound(games, homePlayer, visitorPlayer, currentGame)
          } else {
            player.status = playerStatus.DEUCE
          }
        } else if (player.points === 40) {
          if (visitorPlayer.points <= 30) {
            winRound(games, homePlayer, visitorPlayer, currentGame)
          } else if (visitorPlayer.points === 40) {
            player.points += 1
            player.status = playerStatus.ADVANTAGE
          }
        } else if (player.points > 40 && player.points < 47) {
          visitorPlayer.points += 1
          if (player.points === visitorPlayer.points) {
            player.points += 1
            player.status = playerStatus.ADVANTAGE
          } else if (player.points < visitorPlayer.points) {
            player.points += 1
            player.status = playerStatus.DEUCE
            visitorPlayer.status = playerStatus.DEUCE
          }
          if (player.points === 46) {
            winRound(games, homePlayer, visitorPlayer, currentGame)
          }
          if (
            player.points > visitorPlayer.points &&
            !player.points - visitorPlayer.points === 2
          ) {
            player.status = playerStatus.ADVANTAGE
          }
          if (player.points - visitorPlayer.points === 2) {
            winRound(games, homePlayer, visitorPlayer, currentGame)
          }
        }
      }
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
  console.log(game.pointWonBy('Player 2'))
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
  console.log('currentRoundScore', game.getCurrentRoundScore())
  console.log('roundScore', game.getRoundsScore())
} catch (e) {
  console.log(e)
}
