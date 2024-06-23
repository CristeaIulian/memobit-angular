import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { ThemeSelectorModule } from '@memobit/components/theme-selector';
import { PlaygroundComponent } from './playground/playground.component';
import { MatrixSkillsModule } from '@memobit/components/matrix-skills';
import { LightboxModule } from '@memobit/components/lightbox';
import { IconModule } from '@memobit/components/icon';

const memobitModules = [ThemeSelectorModule];

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [RouterModule.forRoot([]), BrowserModule, memobitModules, MatrixSkillsModule, LightboxModule, IconModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
