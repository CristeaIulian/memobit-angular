import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

import { TooltipModule } from '../../directives/tooltip';
import { IconModule } from '../icon';
import { StarsModule } from '../stars';

import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  exports: [TagComponent],
  imports: [IconModule, StarsModule, TooltipModule, NgIf],
})
export class TagModule {}
