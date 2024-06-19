import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './marcadores.component.html',
  styleUrl: './marcadores.component.css'
})
export class PaginaMarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  public mapa?: Map;
  public lngLat: LngLat = new LngLat(-112.04, 46.62);

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
}
