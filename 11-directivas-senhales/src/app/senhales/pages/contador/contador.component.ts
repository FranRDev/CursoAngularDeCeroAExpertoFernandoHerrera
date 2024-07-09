import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class PaginaContadorComponent {

  public contador = signal(10);
  public contadorAlCuadrado = computed(() => this.contador() * this.contador());

  incrementar(valor: number): void {
    this.contador.update(c => c + valor);
  }

}
