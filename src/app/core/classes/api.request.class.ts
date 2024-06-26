import { Subscription } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { ApiConfig } from "../config"
import { APIRequestResource } from "../types"
import { APIRequestOptions } from "../interfaces"
import { inject } from "@angular/core"
import { TokenService } from "../services"

export abstract class APIRequest {
  tokenService = inject(TokenService)

  subscriptions = new Map<string, Subscription>()

  constructor(protected http: HttpClient, protected resource: APIRequestResource) {}

  private generateUrl({ id, resource, endpoint, suffix, baseURL }: APIRequestOptions) {
    return [baseURL ?? ApiConfig.apiBaseURL, resource ?? this.resource, id, endpoint, suffix].filter(x => !!x).join('/').split('://').map(p => p.replace(/\/\//, '/')).join('://')
  }
}