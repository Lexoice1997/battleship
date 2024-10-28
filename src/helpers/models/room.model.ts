export interface RoomModel {
  roomId: string | number
  roomUsers: RoomUserModel[]
}

export interface RoomUserModel {
  name: string
  index: string | number
}
