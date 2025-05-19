import { v4 as uuidv4 } from "uuid"
import { type WebSocket as WSWebSocket } from "ws"

import { PlayerModel } from "../helpers/models/player.model"

class PlayersClass {
  players: PlayerModel[] = []
  me: PlayerModel | null = null

  findPlayer(name: string) {
    return this.players.find((player) => player.name === name)
  }

  createPlayer(name: string, password: string, ws: WSWebSocket) {
    const newPlayer = {
      id: uuidv4(),
      name,
      password,
      wins: 0,
      ws
    }

    this.players.push(newPlayer)
    this.me = newPlayer

    return newPlayer
  }

  get meInfo() {
    return this.me
  }
}

export const players = new PlayersClass()
