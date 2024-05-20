import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>Hola contador</h1>
  <h3>Contador: {{contador}}</h3>

  <button (click)="incrementarPor(1)">+1</button>
  <button (click)="reiniciar()">Reiniciar</button>
  <button (click)="incrementarPor(-1)">-1</button>`
})

export class ContadorComponent {
  constructor() { }

  public contador: number = 10;

  incrementarPor(valor: number): void {
    this.contador += valor;
  }

  reiniciar() {
    this.contador = 10;
  }

}
