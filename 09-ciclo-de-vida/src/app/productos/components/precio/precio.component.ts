import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'precio',
  templateUrl: './precio.component.html',
  styleUrl: './precio.component.css'
})
export class PrecioComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public precio: number = 0;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
  }

}
