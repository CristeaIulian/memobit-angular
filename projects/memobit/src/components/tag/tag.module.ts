import { NgModule } from '@angular/core';

import { TagComponent } from './tag.component';
import { IconModule } from '../icon/icon.module';
import { StarsModule } from '../stars/stars.module';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [TagComponent],
  exports: [TagComponent],
  imports: [IconModule, StarsModule, TooltipModule, NgIf]
})
export class TagModule {}
