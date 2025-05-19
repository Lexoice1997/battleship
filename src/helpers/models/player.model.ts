import { type WebSocket as WSWebSocket } from "ws"

export interface PlayerModel {
  id: string
  name: string
  password: string
  wins: number
  ws: WSWebSocket
}
