import { HttpInterceptorFn } from '@angular/common/http'
import { ApiConfig } from '../config'
import { inject } from '@angular/core'
import { TokenService } from '../services'

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let tokenService = inject(TokenService)

  const isApiUrl = req.url.startsWith(ApiConfig.apiBaseURL)
  const isLoginUrl = req.url.includes(`${ApiConfig.apiBaseURL}/auth/login`)
  const isRefreshUrl = req.url.includes(`${ApiConfig.apiBaseURL}/auth/refresh`)

  if (isRefreshUrl) {
    const $$refreshToken = tokenService.$$refreshToken

    if ($$refreshToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${$$refreshToken()}`
        }
      })

      return next(req)
    }
  }

  if (isApiUrl && !isLoginUrl) {
    const $$accessToken = tokenService.$$accessToken

    if ($$accessToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${$$accessToken()}`
        }
      })

      return next(req)
    }
  }

  return next(req)
}
