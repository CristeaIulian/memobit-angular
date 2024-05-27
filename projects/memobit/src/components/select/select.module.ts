import { NgModule } from '@angular/core';

import { SelectComponent } from './select.component';
import { InputTextModule } from '../input-text/input-text.module';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TagModule } from '../tag/tag.module';
import { IconModule } from '../icon/icon.module';
@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [InputTextModule, NgClass, TagModule, NgIf, IconModule, NgForOf]
})
export class SelectModule {}
