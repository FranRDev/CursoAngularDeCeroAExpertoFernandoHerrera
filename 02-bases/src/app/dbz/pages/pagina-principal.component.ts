import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-pagina-principal',
  templateUrl: './pagina-principal.component.html'
})

export class PaginaPrincipalComponent {

  constructor(public dbzService: DbzService) { }

}
