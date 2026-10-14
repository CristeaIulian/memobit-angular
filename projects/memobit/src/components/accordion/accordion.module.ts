import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafeHtmlModule } from '../../pipes/safehtml';
import { IconModule } from '../icon';

import { AccordionComponent } from './accordion.component';

@NgModule({
    declarations: [AccordionComponent],
    exports: [AccordionComponent],
    imports: [NgForOf, SafeHtmlModule, IconModule, NgIf],
})
export class AccordionModule {}
