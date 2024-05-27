import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'times'})
export class TimesPipe implements PipeTransform {
  transform<T>(value: number): Iterable<T> {
    const iterable = <Iterable<T>>{};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iterable[Symbol.iterator] = function* (): Iterator<any> {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
