import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ClienteApiDirecciones extends HttpClient {

  urlBase: string = 'https://api.mapbox.com/directions/v5/mapbox/driving';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string) {
    console.log(url);
    url = this.urlBase + url;

    return super.get<T>(url, {
      params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false,
        access_token: environment.mapboxToken
      }
    });
  }

}
