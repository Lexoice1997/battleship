import { v4 as uuidv4 } from "uuid"

import { RoomModel } from "../helpers/models/room.model"
import { players } from "./players"

class RoomsClass {
  rooms: RoomModel[] = []

  createRoom() {
    const me = players.meInfo

    const newRoom: RoomModel = {
      roomId: uuidv4(),
      roomUsers: [{ name: me!.name, index: me!.id }],
    }

    this.rooms.push(newRoom)

    return newRoom
  }

  get getRooms() {
    return this.rooms
  }

  addUserToRoom(indexRoom: string) {
    const currentRoom = this.getRooms.find((room) => room.roomId === indexRoom)
    const me = players.meInfo
    const isAddToRoom = currentRoom?.roomUsers?.every((player) => player.index !== me?.id)

    if (isAddToRoom) {
    }
  }
}

export const rooms = new RoomsClass()
