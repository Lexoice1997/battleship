import { v4 as uuidv4 } from "uuid"

import { RoomModel } from "../helpers/models/room.model"
import { createResponse, sendResponse } from "../helpers/utils/reg-messages.utils"
import { Game, games } from "../store/games"
import { players } from "../store/players"

export function createGame(playerIds: string[]): Game {
  const gameId = uuidv4()
  const game = new Game(gameId, playerIds)

  games.set(game)
  console.log("New game created", game)

  return game
}

export const startGame = (room: RoomModel) => {
  room.isStarted = true

  const game = createGame(room.roomUsers.map((user) => user.index))
  const [player1Data, player2Data] = room.roomUsers
  const player1 = players.findPlayer(player1Data.name)
  const player2 = players.findPlayer(player2Data.name)

  const res1 = createResponse(
    {
      idGame: game.idGame,
      idPlayer: player1?.id,
    },
    "create_game",
    false,
    ""
  )

  player1?.ws ? sendResponse(player1.ws, res1) : null

  const res2 = createResponse(
    {
      idGame: game.idGame,
      idPlayer: player2?.id,
    },
    "create_game",
    false,
    ""
  )

  player2?.ws ? sendResponse(player2.ws, res2) : null
}
