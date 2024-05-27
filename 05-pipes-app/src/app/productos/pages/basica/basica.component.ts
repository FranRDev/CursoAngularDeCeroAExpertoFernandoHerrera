import { Component } from '@angular/core';

@Component({
  selector: 'pagina-basica',
  templateUrl: './basica.component.html',
  styleUrl: './basica.component.css'
})
export class PaginaBasicaComponent {

  public nombreMinusculas: string = 'francisco';
  public nombreMayusculas: string = 'FRANCISCO';
  public nombreCompleto: string = 'fRanCiscO roDríguEZ'

}
