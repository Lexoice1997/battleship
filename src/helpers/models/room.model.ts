export interface RoomModel {
  roomId: string | number
  roomUsers: RoomUserModel[]
  isStarted: boolean
}

export interface RoomUserModel {
  name: string
  index: string
}
