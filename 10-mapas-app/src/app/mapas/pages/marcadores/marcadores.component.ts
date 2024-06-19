import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarcadorYColor {
  marcador: Marker;
  color: string;
}

@Component({
  templateUrl: './marcadores.component.html',
  styleUrl: './marcadores.component.css'
})
export class PaginaMarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  public mapa?: Map;
  public lngLat: LngLat = new LngLat(-112.04, 46.62);
  public marcadoresColores: MarcadorYColor[] = [];

  ngAfterViewInit(): void {
    if (!this.divMapa) { throw 'Elemento HTML no encontrado'; }

    this.mapa = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat, // [lng, lat]
      zoom: 13
    });

    // const marcadorHtml = document.createElement('div');
    // marcadorHtml.innerHTML = 'FranRDev';
    // const marcador = new Marker({ color: 'red', element: marcadorHtml }).setLngLat(this.lngLat).addTo(this.mapa);
  }

  crearMarcador(): void {
    if (!this.mapa) { return; }
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.mapa.getCenter();
    this.anhadirMarcador(lngLat, color);
  }

  anhadirMarcador(lngLat: LngLat, color: string): void {
    if (!this.mapa) { return; }
    const marcador = new Marker({ color, draggable: true }).setLngLat(lngLat).addTo(this.mapa);
    this.marcadoresColores.push({ marcador, color });
  }

  eliminarMarcador(indice: number): void {
    this.marcadoresColores[indice].marcador.remove();
    this.marcadoresColores.splice(indice, 1);
  }

  volarA(marcador: Marker) {
    this.mapa?.flyTo({ zoom: 14, center: marcador.getLngLat() });
  }

}
