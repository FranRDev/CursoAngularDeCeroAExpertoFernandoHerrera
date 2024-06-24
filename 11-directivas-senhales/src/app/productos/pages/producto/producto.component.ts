import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class PaginaProductoComponent {

  private fb = inject(FormBuilder);

  public color: string = 'green';

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  cambiarColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
