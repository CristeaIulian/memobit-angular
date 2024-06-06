import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { NgForOf, NgIf } from '@angular/common';
import { SafeHtmlModule } from '../../pipes/safehtml';
import { IconModule } from '../icon';

@NgModule({
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
  imports: [NgForOf, SafeHtmlModule, IconModule, NgIf],
})
export class AccordionModule {}
