import { RequestResponse } from "./http.interface"

export interface LoginResponse extends RequestResponse {
  data?: TokenData
}

interface TokenData {
  access_token: string
  refresh_token: string
}