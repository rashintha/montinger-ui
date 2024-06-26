import { Injectable, inject, signal } from '@angular/core';
import { APIRequest } from '../classes';
import { HttpClient } from '@angular/common/http';
import { APIRequestResources } from '../enums';
import { ApiConfig } from '../config';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends APIRequest {

  private router = inject(Router)

  $$inProgress = signal(false)
  $$isLogged = signal(false)

  constructor(protected override http: HttpClient) {
    super(http, APIRequestResources.AuthService)
  }

  private syncLoggedState() {
    this.$$isLogged.set(this.tokenService.$$accessToken()?.isNotEmpty() || false)
    this.$$inProgress.set(false)
  }

  signInWithCredentials(email: string, password: string) {
    return this.http.post<any>(`${ApiConfig.apiBaseURL}/auth/login`, { email, password })
      .pipe(
        map(res => {
          const { data, ..._res } = res

          if (data) {
            this.tokenService.save({ accessToken: data.access_token, refreshToken: data.refresh_token })
            this.syncLoggedState()
            this.$$inProgress.set(false)
          }

          return _res
        })
      )
  }

  canActivate() {
    this.syncLoggedState()
    if(!this.$$isLogged())  this.router.navigateByUrl('/login')
    return this.$$isLogged()
  }
}