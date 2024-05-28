import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/heroe.interface';

@Component({
  selector: 'pagina-anhadir',
  templateUrl: './anhadir.component.html'
})
export class PaginaAnhadirComponent {

  public formularioHeroe = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>('')
  });

  public publicadores = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ];

  enviarFormulario(): void {
    console.log({
      esValido: this.formularioHeroe.valid,
      valor: this.formularioHeroe.value
    });
  }

}
