import { type WebSocket as WSWebSocket } from "ws"
import { IncomingMessageModel } from "../helpers/models/incoming-message.model"

export const addToRoomController = (ws: WSWebSocket, msg: IncomingMessageModel) => {
  console.log(JSON.parse(msg.data))
}
