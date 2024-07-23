import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ClienteApiLugares extends HttpClient {

  urlBase: string = 'https://api.mapbox.com/search/geocode/v6/forward?q=';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string, options: { params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; } }) {
    url = this.urlBase + url;

    return super.get<T>(url, {
      params: {
        limit: 5,
        language: 'es',
        access_token: environment.mapboxToken,
        ...options.params
      }
    });
  }

}
