import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'secondsToHuman' })
export class SecondsToHumanPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }
}

// @Todo: rename it to humanReadableSeconds? maybe
