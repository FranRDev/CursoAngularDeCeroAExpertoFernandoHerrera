import { AfterViewInit, Component } from '@angular/core';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = '';

@Component({
  templateUrl: './pantalla-completa.component.html',
  styleUrl: './pantalla-completa.component.css'
})
export class PaginaPantallaCompletaComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

  }

}
