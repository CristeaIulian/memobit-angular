import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

import { ButtonModule } from '../../directives/button';

import { TabComponent } from './tab.component';
@NgModule({
  declarations: [TabComponent],
  exports: [TabComponent],
  imports: [ButtonModule, NgForOf]
})
export class TabModule {}
