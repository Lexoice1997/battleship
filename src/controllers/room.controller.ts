import { type WebSocket as WSWebSocket } from "ws"

import { IncomingMessageModel } from "../helpers/models/incoming-message.model"
import { createResponse, sendResponse } from "../helpers/utils/reg-messages.utils"
import { rooms } from "../store/rooms"
import { startGame } from "./game.controller"

export const addToRoomController = (ws: WSWebSocket, msg: IncomingMessageModel) => {
  const { indexRoom } = JSON.parse(msg.data)
  const room = rooms.get(indexRoom)

  if (room && room.roomUsers.length < 2) {
    rooms.addUserToRoom(indexRoom)
    updateRoom(ws)
    
    startGame(room)
  } else {
    const res = createResponse("error", "", true, "Room not available")
    sendResponse(ws, res)
  }
}

export const createRoomController = (ws: WSWebSocket) => {
  rooms.createRoom()

  updateRoom(ws)
}

const updateRoom = (ws: WSWebSocket) => {
  const roomsList = rooms.getRooms

  const res = createResponse(roomsList, "update_room", false, "")
  sendResponse(ws, res)
}
