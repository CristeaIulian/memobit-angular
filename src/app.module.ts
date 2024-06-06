import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { ThemeSelectorModule } from '@memobit/components/theme-selector';
import { PlaygroundComponent } from './playground/playground.component';
import { AccordionModule } from '@memobit/components/accordion';
import { SafeHtmlModule } from '@memobit/pipes/safehtml';

const memobitModules = [ThemeSelectorModule];

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [RouterModule.forRoot([]), BrowserModule, memobitModules, AccordionModule, SafeHtmlModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
