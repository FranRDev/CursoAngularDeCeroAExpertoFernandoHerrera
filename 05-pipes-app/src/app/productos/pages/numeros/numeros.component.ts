import { Component } from '@angular/core';

@Component({
  selector: 'pagina-numeros',
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css'
})
export class PaginaNumerosComponent {

  public totalVentas: number = 2567789.5567;
  public porcentaje: number = 0.4856;

}
