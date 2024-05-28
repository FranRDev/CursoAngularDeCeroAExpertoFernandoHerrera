import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

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

  constructor(private servicioHeroes: HeroesService) { }

  get heroeActual(): Heroe {
    const heroe = this.formularioHeroe.value as Heroe;
    return heroe;
  }

  enviarFormulario(): void {
    if (this.formularioHeroe.invalid) { return; }

    if (this.heroeActual.id) {
      this.servicioHeroes.actualizarHeroe(this.heroeActual).subscribe(heroe => {}); // TODO: Mostrar snakbar

    } else {
      this.servicioHeroes.anhadirHeroe(this.heroeActual).subscribe(heroe => {}); // TODO: ...
    }
  }

}
