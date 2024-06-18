import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'precio',
  templateUrl: './precio.component.html',
  styleUrl: './precio.component.css'
})
export class PrecioComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public precio: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    this.interval$ = interval(1000).subscribe(valor => console.log(`Tick ${valor}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
