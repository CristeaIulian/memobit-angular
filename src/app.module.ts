import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { ThemeSelectorModule } from '@memobit/components/theme-selector';
import { PlaygroundComponent } from './playground/playground.component';
import { SelectModule } from '@memobit/components/select';
import { TextareaModule } from '@memobit/components/textarea';
import { CheckboxModule } from '@memobit/components/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

const memobitModules = [ThemeSelectorModule];

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [RouterModule.forRoot([]), BrowserModule, memobitModules, SelectModule, TextareaModule, CheckboxModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
