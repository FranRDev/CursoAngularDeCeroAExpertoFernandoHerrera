import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'imagen-perezosa',
  templateUrl: './imagen-perezosa.component.html'
})
export class ImagenPerezosaComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public cargada: boolean = false;

  ngOnInit(): void {
    if (!this.url) { throw new Error('URL es requerido'); }
  }

  imagenCargada(): void {
    console.log('Imagen cargada');
    this.cargada = true;
  }

}
