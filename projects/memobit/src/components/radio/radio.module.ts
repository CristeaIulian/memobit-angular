import { NgModule } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

import { RadioComponent } from './radio.component';
import { IconModule } from '../icon';
@NgModule({
  declarations: [RadioComponent],
  exports: [RadioComponent],
  imports: [NgClass, IconModule, NgForOf],
})
export class RadioModule {}
