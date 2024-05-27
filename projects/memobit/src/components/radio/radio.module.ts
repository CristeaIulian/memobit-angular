import { NgModule } from '@angular/core';

import { RadioComponent } from './radio.component';
import { NgClass, NgForOf } from '@angular/common';
import { IconModule } from '../icon/icon.module';
@NgModule({
  declarations: [RadioComponent],
  exports: [RadioComponent],
  imports: [NgClass, IconModule, NgForOf]
})
export class RadioModule {}
