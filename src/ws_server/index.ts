import { config } from "dotenv"
import { type IncomingMessage } from "http"
import process from "node:process"
import { Server, type WebSocket as WSWebSocket } from "ws"
import { regController } from "../controllers/reg-controller"
import { IncomingMessageModel } from "../helpers/models/incoming-message.model"

config()

const WS_PORT = Number(process.env.WS_PORT) || 3000

const startWebsocketServer = () => {
  const websocketServer = new Server({ port: WS_PORT })
  websocketServer.on("connection", handleConnectionWS)
  websocketServer.on("error", (error) => {
    console.error(error)
  })

  console.log(`Start WS server on PORT: ${WS_PORT}`)
}

const handleConnectionWS = (ws: WSWebSocket, req: IncomingMessage): void => {
  ws.on("close", () => {})

  ws.on("message", (message: Buffer) => {
    try {
      const incomingClientMessage: IncomingMessageModel = JSON.parse(message.toString("utf8"))
      clientMessageHandler(ws, incomingClientMessage)
    } catch (error) {
      console.log(error)
    }
  })
}

const clientMessageHandler = (
  ws: WSWebSocket,
  incomingClientMessage: IncomingMessageModel
): void => {
  console.log(incomingClientMessage.type)

  switch (incomingClientMessage.type) {
    case "reg": {
      regController(ws, incomingClientMessage)
      break
    }
    case "create_room": {
      break
    }
    case "add_user_to_room": {
      break
    }
    case "add_ships": {
      break
    }
    case "attack": {
      break
    }
    case "randomAttack": {
      break
    }
    default: {
      console.log("Unknown message type!")
    }
  }
}

startWebsocketServer()
