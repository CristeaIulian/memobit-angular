import { NgModule } from '@angular/core';

import { StarsComponent } from './stars.component';
import { IconModule } from '../icon/icon.module';
import { TimesModule } from '../../pipes/times/times.module';
import { NgForOf } from '@angular/common';

const coreModules = [NgForOf];

@NgModule({
  declarations: [StarsComponent],
  exports: [StarsComponent],
  imports: [...coreModules, IconModule, TimesModule]
})
export class StarsModule {}
