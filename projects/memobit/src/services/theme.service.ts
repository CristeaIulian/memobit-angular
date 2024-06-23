import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  public setTheme(assetsPath?: string, theme?: string): void {
    const savedTheme = theme || this.getTheme();

    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.type = 'text/css';
    themeLink.href = `${assetsPath ? assetsPath : ''}/memobit/themes/${savedTheme}.css`;

    const head = document.getElementsByTagName('head');
    head[0].appendChild(themeLink);
  }

  private getTheme(): string {
    const lsTheme = localStorage.getItem('mem-theme');
    return lsTheme ? <string>JSON.parse(lsTheme) : 'dark-linear';
  }
}
