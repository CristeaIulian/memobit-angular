import { NgModule } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';

import { InputTextModule } from '../input-text';
import { TagModule } from '../tag';
import { IconModule } from '../icon';

import { CheckboxModule } from '../checkbox';

import { SelectComponent } from './select.component';
@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [InputTextModule, NgClass, TagModule, NgIf, IconModule, CheckboxModule, NgForOf],
})
export class SelectModule {}
