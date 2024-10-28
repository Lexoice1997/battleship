import { IncomingMessageModel } from "src/helpers/models/incoming-message.model"
import { RegResponse } from "src/helpers/models/reg-response.model"

import { type WebSocket as WSWebSocket } from "ws"
import { createResponse, sendResponse } from "../helpers/utils/reg-messages.utils"
import { players } from "../store/players"

export const regController = (ws: WSWebSocket, msg: IncomingMessageModel) => {
  const data = JSON.parse(msg.data)
  const { name, password } = data

  const currentPlayer = players.findPlayer(name)

  const res: RegResponse = currentPlayer
    ? createResponse({ name, password }, "reg", true, "Player already exists")
    : createPlayer(name, password)

  sendResponse(ws, res)
}

const createPlayer = (name: string, password: string) => {
  const req = players.createPlayer(name, password)

  return createResponse({ name: req.name, id: req.id }, "reg", false, "")
}
