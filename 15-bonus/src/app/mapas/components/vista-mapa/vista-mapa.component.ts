import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrl: './vista-mapa.component.css'
})
export class VistaMapaComponent implements AfterViewInit {

  @ViewChild('divMapa') elementoDivMapa!: ElementRef;

  constructor(private servicioLugares: LugaresService) { }

  ngAfterViewInit(): void {
    if (!this.servicioLugares.localizacionUsuario) { throw Error('No hay localización del usuario'); }

    const mapa = new Map({
      container: this.elementoDivMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.servicioLugares.localizacionUsuario, // [lng, lat]
      zoom: 14, // starting zoom
    });
  }

}
