import { NgModule } from '@angular/core';

import { ScrollToTopComponent } from './scroll-to-top.component';
import { IconModule } from '../icon/icon.module';
import { NgIf } from '@angular/common';
import { ButtonModule } from '../../directives/button/button.module';
@NgModule({
  declarations: [ScrollToTopComponent],
  exports: [ScrollToTopComponent],
  imports: [IconModule, NgIf, ButtonModule]
})
export class ScrollToTopModule {}
