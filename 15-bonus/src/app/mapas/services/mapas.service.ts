import { Injectable } from '@angular/core';

import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/lugares.interface';

@Injectable({ providedIn: 'root' })
export class MapaService {

  private mapa?: Map;
  private marcadores: Marker[] = [];

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

  crearMarcadoresDeLugares(lugares: Feature[], localizacionUsuario: [number, number]) {
    if (!this.mapa) { throw Error('Mapa no inicializado'); }

    this.marcadores.forEach(marcador => marcador.remove());
    const nuevosMarcadores = [];

    for (const lugar of lugares) {
      const [lng, lat] = lugar.geometry.coordinates;
      const popup = new Popup().setHTML(`<h6>${lugar.properties.name_preferred}</h6><span>${lugar.properties.place_formatted}</span>`)
      const marcador = new Marker().setLngLat([lng, lat]).setPopup(popup).addTo(this.mapa);
      nuevosMarcadores.push(marcador);
    }

    this.marcadores = nuevosMarcadores;
    if (lugares.length === 0) { return; }

    const limites = new LngLatBounds();
    nuevosMarcadores.forEach(marcador => limites.extend(marcador.getLngLat()));
    limites.extend(localizacionUsuario);

    this.mapa.fitBounds(limites, { padding: 200 });
  }

}
