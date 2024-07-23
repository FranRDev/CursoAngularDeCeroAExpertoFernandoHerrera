import { Component } from '@angular/core';

@Component({
  selector: 'boton-mi-localizacion',
  templateUrl: './boton-mi-localizacion.component.html',
  styleUrl: './boton-mi-localizacion.component.css'
})
export class BotonMiLocalizacionComponent {

  irAMiLocalizacion() {
    console.log('Ir a mi localización');
  }

}
