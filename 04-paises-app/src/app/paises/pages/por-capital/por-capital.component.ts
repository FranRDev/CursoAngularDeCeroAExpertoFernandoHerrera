import { Component } from '@angular/core';

@Component({
  selector: 'pagina-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PaginaPorCapitalComponent {

  buscarPorCapital(busqueda: string): void {
    console.log('Búsqueda por capital', busqueda);
  }

}
