import { ShipDataModel } from "./shipData.model";

export interface PlayerDataModel {
  ships: ShipDataModel[]
  shotsReceived: { x: number; y: number }[]
}
