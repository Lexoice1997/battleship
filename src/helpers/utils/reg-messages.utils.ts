import { type WebSocket as WSWebSocket } from "ws"
import { RegResponse } from "../models/reg-response.model"

export function createResponse<T>(
  data: T,
  type: string,
  error: boolean,
  errorText: string
): RegResponse {
  if (error) {
    return {
      type: type,
      data: JSON.stringify({ error, errorText, ...data }),
      id: 0,
    }
  }

  return {
    type: type,
    data: JSON.stringify(data),
    id: 0,
  }
}

export function sendResponse(ws: WSWebSocket, response: RegResponse) {
  try {
    ws.send(JSON.stringify(response))
  } catch (error) {
    console.error(
      `Error sending response: ${error instanceof Error ? error.message : "Unknown error"}`
    )
  }
}
