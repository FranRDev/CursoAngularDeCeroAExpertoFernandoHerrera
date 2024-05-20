import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public heroes: string[] = ['Spider-Man', 'Iron Man', 'Hulk', 'She-Hulk', 'Thor'];
  public heroeEliminado?: string;

  eliminarUltimoHeroe(): void {
    this.heroeEliminado = this.heroes.pop();
  }

}
