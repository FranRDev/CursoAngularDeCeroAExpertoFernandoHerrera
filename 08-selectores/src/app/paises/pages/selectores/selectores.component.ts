import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pagina-selectores',
  templateUrl: './selectores.component.html'
})
export class PaginaSelectoresComponent {

  public formulario: FormGroup = this.fb.group({
    continente: ['', Validators.required],
    pais: ['', Validators.required],
    fronteras: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

}
