import { Component, OnInit } from '@angular/core';

import { Theme } from './types';

@Component({
  selector: 'mem-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {
  public options: string[] = [Theme.DarkLinear, Theme.DarkLuna, Theme.DarkMaterial].map((theme) => <string>theme);
  public selected: string = this.options[0];

  public ngOnInit(): void {
    const currentTheme = localStorage.getItem('mem-theme');

    if (currentTheme) {
      this.selected = JSON.parse(currentTheme);
    }
  }

  public onSelectedItems(theme: number | string | number[] | string[]): void {
    localStorage.setItem('mem-theme', JSON.stringify(theme));
    window.location.reload();
  }
}
