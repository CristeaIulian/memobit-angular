import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: false,
    name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
    transform<T>(data: Array<T>, filterColumn: keyof T, filterValue: string): Array<T> {
        return data.filter((el): boolean => String(el[filterColumn]).toLowerCase().includes(filterValue.toLowerCase()));
    }
}
