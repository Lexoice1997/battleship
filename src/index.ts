import { config } from "dotenv"
import * as process from "node:process"
import { httpServer } from "./http_server"
import "./ws_server/index"

config()

const HTTP_PORT = process.env.HTTP_PORT || 8181

console.log(`Start HTTP server on PORT: ${HTTP_PORT}`)
httpServer.listen(HTTP_PORT)
