import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'replaceAll',
})
export class ReplaceAllPipe implements PipeTransform {
  transform(str: string, match: string, replaceWith: string): string {
    return str.replace(new RegExp(match, 'gi'), replaceWith);
  }
}
