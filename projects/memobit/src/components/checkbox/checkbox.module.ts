import { NgModule } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

import { CheckboxComponent } from './checkbox.component';
import { IconModule } from '../icon';
@NgModule({
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
  imports: [NgClass, IconModule, NgForOf],
})
export class CheckboxModule {}
