import { Component } from '@angular/core';

@Component({
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PaginaPropiedadesComponent {

  campoActualizado(campo: string, valor: string) {
    console.log({ campo, valor });
  }

}
