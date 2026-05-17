import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform<T>(data: Array<T>, filterColumn: string, filterValue: string): Array<T> {
    // @ts-ignore
    return data.filter((el): boolean => el[filterColumn].toLowerCase().includes(filterValue.toLowerCase()));
  }
}
