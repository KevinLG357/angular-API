import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words',
})
export class WordsPipe implements PipeTransform {
  transform(value: any): any {
    switch (value) {
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Muerto';
      case 'unknown':
        return 'Desconocido';
      default:
        return value;
    }
  }
}
