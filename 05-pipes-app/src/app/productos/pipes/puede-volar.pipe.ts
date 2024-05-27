import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'puedeVolar'})
export class PuedeVolarPipe implements PipeTransform {

  transform(valor: boolean): 'Vuela' | 'No vuela' {
    return valor ? 'Vuela' : 'No vuela';
  }

}
