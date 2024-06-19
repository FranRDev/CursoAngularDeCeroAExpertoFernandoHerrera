import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './rango-zoom.component.html',
  styleUrl: './rango-zoom.component.css'
})
export class PaginaRangoZoomComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa?: ElementRef;

  public mapa?: Map;
  public zoom: number = 10;
  public lngLat: LngLat = new LngLat(-112.04, 46.62);

  ngAfterViewInit(): void {
    if (!this.divMapa) { throw 'Elemento HTML no encontrado'; }

    this.mapa = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat, // [lng, lat]
      zoom: this.zoom,
    });

    this.escuchadoresMapa();
  }

  ngOnDestroy(): void {
    this.mapa?.remove();
  }

  escuchadoresMapa(): void {
    if (!this.mapa) { throw 'Mapa no inicializado'; }

    this.mapa.on('zoom', () => {
      this.zoom = this.mapa!.getZoom();
    });

    this.mapa.on('zoomend', () => {
      if (this.mapa!.getZoom() > 18) { this.mapa!.zoomTo(18); }
    });

    this.mapa.on('move', () => {
      this.lngLat = this.mapa!.getCenter();
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
