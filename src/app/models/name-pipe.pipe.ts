import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(name: string, array: string[]): string {
    for (let i = 0; i < array.length; i++) {
     if (name === array[i]) {
       return name + 'II'
     }
     else return name

    }
  }

}

