import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './rango-zoom.component.html',
  styleUrl: './rango-zoom.component.css'
})
export class PaginaRangoZoomComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMapa) { throw 'Elemento HTML no encontrado'; }

    const mapa = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // [lng, lat]
      zoom: 9,
    });
  }

}
