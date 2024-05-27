import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringsService {
  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }
}
