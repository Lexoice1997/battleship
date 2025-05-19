import { type WebSocket as WSWebSocket } from "ws"

import { IncomingMessageModel } from "../helpers/models/incoming-message.model"
import { RegResponse } from "../helpers/models/reg-response.model"
import { createResponse, sendResponse } from "../helpers/utils/reg-messages.utils"
import { players } from "../store/players"

export const regController = (ws: WSWebSocket, msg: IncomingMessageModel) => {
  const data = JSON.parse(msg.data)
  const { name, password } = data

  const currentPlayer = players.findPlayer(name)

  const res: RegResponse = currentPlayer
    ? createResponse({ name, password }, "reg", true, "Player already exists")
    : createPlayer(name, password, ws)
3
  sendResponse(ws, res)
}

const createPlayer = (name: string, password: string, ws: WSWebSocket) => {
  const req = players.createPlayer(name, password, ws)

  return createResponse({ name: req.name, id: req.id }, "reg", false, "")
}
