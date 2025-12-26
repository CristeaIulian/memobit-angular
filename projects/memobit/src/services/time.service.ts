import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  secondsToHuman(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }

  minutesToHuman(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours} hours ${minutes} minutes`;
  }
}
