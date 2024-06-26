export interface RequestResponse {
  timestamp: Date
  environment: string
  data?: unknown
  message?: string
  errors?: string[]
}