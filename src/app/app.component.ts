import { Component, OnInit } from '@angular/core';

import { ThemingService } from '@memobit/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private readonly _themeService: ThemingService) {}

  public ngOnInit(): void {
    this._themeService.setTheme('assets');
  }
}
