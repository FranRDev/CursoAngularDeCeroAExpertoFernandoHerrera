import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  @Input()
  public placeholder: string = '';

  @Output()
  public buscando = new EventEmitter<string>;

  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => this.buscando.emit(valor))
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
