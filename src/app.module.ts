import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { ThemeSelectorModule } from '@memobit/components/theme-selector';
import { PlaygroundComponent } from './playground/playground.component';

const memobitModules = [ThemeSelectorModule];

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [RouterModule.forRoot([]), BrowserModule, memobitModules],
  bootstrap: [AppComponent]
})
export class AppModule {}
