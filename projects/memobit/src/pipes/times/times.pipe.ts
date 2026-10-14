import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: false,
    name: 'times',
})
export class TimesPipe implements PipeTransform {
    transform(value: number): Iterable<number> {
        return {
            *[Symbol.iterator](): Iterator<number> {
                let n = 0;
                while (n < value) {
                    yield ++n;
                }
            },
        };
    }
}
