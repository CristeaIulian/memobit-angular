import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'typeof',
})
export class TypeOfPipe implements PipeTransform {
  transform(value: unknown): string {
    return typeof value;
  }
}
