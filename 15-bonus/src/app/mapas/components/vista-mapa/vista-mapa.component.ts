import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrl: './vista-mapa.component.css'
})
export class VistaMapaComponent implements OnInit {

  constructor(private servicioLugares: LugaresService) { }

  ngOnInit(): void {
    console.log(this.servicioLugares.localizacionUsuario);
  }

}
