import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'pagina-busqueda',
  templateUrl: './busqueda.component.html'
})
export class PaginaBusquedaComponent {

  public entradaBusqueda = new FormControl('');
  public heroes: Heroe[] = [];
  public heroeSeleccionado?: Heroe;

  constructor(private servicioHeroes: HeroesService) { }

  public buscarHeroe(): void {
    const busqueda: string = this.entradaBusqueda.value || '';
    this.servicioHeroes.obtenerSugerencias(busqueda).subscribe(heroes => this.heroes = heroes);
  }

  public opcionSeleccionada(evento: MatAutocompleteSelectedEvent): void {
    if (!evento.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = evento.option.value;
    this.entradaBusqueda.setValue(heroe.superhero);
    this.heroeSeleccionado = heroe;
  }

}
