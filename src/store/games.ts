import { PlayerDataModel } from "../helpers/models/playerData.model"

class GamesClass {
  games: Game[] = []

  set(game: Game) {
    this.games.push(game)
  }

  get(gameId: string) {
    return this.games.find((game) => game.idGame === gameId)
  }
}

export const games = new GamesClass()

export class Game {
  idGame: string
  players: { [clientId: string]: PlayerDataModel }
  currentTurn: string

  constructor(idGame: string, playerIds: string[]) {
    this.idGame = idGame
    this.players = {}
    for (const id of playerIds) {
      this.players[id] = {
        ships: [],
        shotsReceived: [],
      }
    }
    this.currentTurn = playerIds[Math.floor(Math.random() * playerIds.length)]
  }
}
