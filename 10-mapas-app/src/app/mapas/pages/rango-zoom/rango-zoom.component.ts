import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';
import { map } from 'rxjs';

@Component({
  templateUrl: './rango-zoom.component.html',
  styleUrl: './rango-zoom.component.css'
})
export class PaginaRangoZoomComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  public mapa?: Map;
  public zoom: number = 10;

  ngAfterViewInit(): void {
    if (!this.divMapa) { throw 'Elemento HTML no encontrado'; }

    this.mapa = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // [lng, lat]
      zoom: this.zoom,
    });

    this.escuchadoresMapa();
  }

  escuchadoresMapa(): void {
    if (!this.mapa) { throw 'Mapa no inicializado'; }

    this.mapa.on('zoom', () => {
      this.zoom = this.mapa!.getZoom();
    });

    this.mapa.on('zoomend', () => {
      if (this.mapa!.getZoom() > 18) { this.mapa!.zoomTo(18); }
    });
  }

  ampliarZoom(): void {
    this.mapa?.zoomIn();
  }

  reducirZoom(): void {
    this.mapa?.zoomOut();
  }

  zoomCambiado(valor: string): void {
    this.zoom = Number(valor);
    this.mapa!.zoomTo(this.zoom);
  }

}
