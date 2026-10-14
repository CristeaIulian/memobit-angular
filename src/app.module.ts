import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from '@memobit/components/checkbox';
import { SelectModule } from '@memobit/components/select';
import { TextareaModule } from '@memobit/components/textarea';
import { ThemeSelectorModule } from '@memobit/components/theme-selector';

import { AppComponent } from './app/app.component';
import { PlaygroundComponent } from './playground/playground.component';

const memobitModules = [ThemeSelectorModule];

@NgModule({
    declarations: [AppComponent, PlaygroundComponent],
    imports: [RouterModule.forRoot([]), BrowserModule, memobitModules, SelectModule, TextareaModule, CheckboxModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
