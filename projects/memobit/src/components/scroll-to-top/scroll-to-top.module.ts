import { NgModule } from '@angular/core';

import { ScrollToTopComponent } from './scroll-to-top.component';
import { IconModule } from '../icon';
import { NgIf } from '@angular/common';
import { ButtonModule } from '../../directives/button';
@NgModule({
  declarations: [ScrollToTopComponent],
  exports: [ScrollToTopComponent],
  imports: [IconModule, NgIf, ButtonModule],
})
export class ScrollToTopModule {}
