import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

import { IconModule } from '../icon';
import { TimesModule } from '../../pipes/times';

import { StarsComponent } from './stars.component';

const coreModules = [NgForOf];

@NgModule({
  declarations: [StarsComponent],
  exports: [StarsComponent],
  imports: [...coreModules, IconModule, TimesModule],
})
export class StarsModule {}
