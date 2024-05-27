import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(valor: string, mayusculas: boolean = false): string {
    return mayusculas ? valor.toUpperCase() : valor.toLocaleLowerCase();
  }

}
