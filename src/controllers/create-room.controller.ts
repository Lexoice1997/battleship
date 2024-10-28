import { type WebSocket as WSWebSocket } from "ws"
import { createResponse, sendResponse } from "../helpers/utils/reg-messages.utils"
import { rooms } from "../store/rooms"

export const createRoomController = (ws: WSWebSocket) => {
  const newRoom = rooms.createRoom()

  updateRoom(ws)
}

const updateRoom = (ws: WSWebSocket) => {
  const roomsList = rooms.getRooms

  const res = createResponse(roomsList, "update_room", false, "")
  sendResponse(ws, res)
}
