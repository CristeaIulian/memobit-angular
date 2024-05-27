import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  log<T>(...message: T[]): void {
    // eslint-disable-next-line no-console
    console.log(...message);
  }

  info<T>(...message: T[]): void {
    // eslint-disable-next-line no-console
    if (message.length === 1 && (typeof message[0] === 'string' || typeof message[0] === 'number')) {
      console.info(`%cⓘ ${message[0]}`, 'color: #0052bb; background-color: #64b7ff; padding: 2px; display: block; width: 100%');
    } else {
      console.info(...message);
    }
  }

  warn<T>(...message: T[]): void {
    // eslint-disable-next-line no-console
    console.warn(...message);
  }

  error<T>(...message: T[]): void {
    // eslint-disable-next-line no-console
    console.error(...message);
  }
}
