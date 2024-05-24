import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit, OnDestroy {

  @Input()
  public placeholder: string = '';

  @Output()
  public buscando = new EventEmitter<string>;

  private debouncer: Subject<string> = new Subject<string>();
  private suscripcionDebouncer?: Subscription;

  ngOnInit(): void {
    this.suscripcionDebouncer = this.debouncer.pipe(debounceTime(300)).subscribe(valor => this.buscando.emit(valor))
  }

  ngOnDestroy(): void {
    this.suscripcionDebouncer?.unsubscribe();
  }

  public teclaPulsada(busqueda: string) {
    this.debouncer.next(busqueda);
  }

  // @ViewChild('entradaBusqueda')
  // private entradaBusqueda!: ElementRef<HTMLInputElement>;

  // public buscar() {
  //   this.buscando.emit(this.entradaBusqueda.nativeElement.value);
  // }

}
