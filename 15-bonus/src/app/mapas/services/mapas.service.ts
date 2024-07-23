import { Injectable } from '@angular/core';

import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({ providedIn: 'root' })
export class MapaService {

  private mapa?: Map;

  get mapaListo() {
    return !!this.mapa;
  }

  establecerMapa(mapa: Map) {
    this.mapa = mapa;
  }

  volarA(coordenadas: LngLatLike) {
    if (!this.mapaListo) { throw Error('El mapa no está listo') };
    this.mapa!.flyTo({ zoom: 14, center: coordenadas });
  }

}
