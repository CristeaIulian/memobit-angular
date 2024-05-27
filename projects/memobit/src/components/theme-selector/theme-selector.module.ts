import { NgModule } from '@angular/core';

import { ThemeSelectorComponent } from './theme-selector.component';
import { SelectModule } from '../select/select.module';
@NgModule({
  declarations: [ThemeSelectorComponent],
  exports: [ThemeSelectorComponent],
  imports: [SelectModule]
})
export class ThemeSelectorModule {}
