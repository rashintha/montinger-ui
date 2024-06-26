import { APIRequestResource } from "../types"

export interface APIRequestOptions {
  /**
   * ID
   *
   * @type string | undefined
   * @description This will be included at the end of the URL
   */
  id?: string,

  /**
   * Resource
   *
   * @type APIRequestResource | undefined
   * @description This is the resource name of your microservice
   */
  resource?: APIRequestResource

  /**
   * Endpoint
   *
   * @type string | undefined
   * @description This is the endpoint you're calling
   */
  endpoint?: string

  /**
   * Suffix
   *
   * @type string
   * @description This will be added to the very end of the URL tree
   */
  suffix?: string

  /**
   * Parameters
   *
   * @type Record<string, string | string[] | number | boolean>
   * @description Use this to enter your parameters of the request
   */
  params?: Record<string, string | string[] | number | boolean>

  /**
   * Base URL
   * 
   * @type string
   * @description Use this to replace the base url
   */
  baseURL?: string
}