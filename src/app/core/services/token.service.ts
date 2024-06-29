import { Injectable, signal } from '@angular/core'
import { TokenSave } from '../interfaces'

const ACCESS_TOKEN_STORAGE_KEY = 'invalid_access_token'
const REFRESH_TOKEN_STORAGE_KEY = 'invalid_refresh_token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  $$accessToken = signal<string | null>(null)
  $$refreshToken = signal<string | null>(null)

  constructor() {
    this.$$accessToken.set(localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY))
    this.$$refreshToken.set(localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY))
  }

  save({ accessToken, refreshToken }: TokenSave) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
    this.$$accessToken.set(accessToken)

    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshToken)
    this.$$refreshToken.set(refreshToken)
  }
}
