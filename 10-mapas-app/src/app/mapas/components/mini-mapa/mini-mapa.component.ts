import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrl: './mini-mapa.component.css'
})
export class MiniMapaComponent implements AfterViewInit, OnDestroy {

  @Input() lngLat?: [number, number];

  @ViewChild('mapa') divMapa?: ElementRef;

  public mapa?: Map;

  ngAfterViewInit(): void {
    if (!this.divMapa) { throw 'Elemento HTML no encontrado'; }
    if (!this.lngLat) { throw 'Se necesita Longitud - Latitud'; }

    this.mapa = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat, // [lng, lat]
      zoom: 15,
      interactive: false
    });

    new Marker().setLngLat(this.lngLat).addTo(this.mapa);
  }

  ngOnDestroy(): void {
    this.mapa?.remove();
  }

}
