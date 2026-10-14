import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../../directives/button';
import { IconModule } from '../icon';

import { ScrollToTopComponent } from './scroll-to-top.component';

@NgModule({
    declarations: [ScrollToTopComponent],
    exports: [ScrollToTopComponent],
    imports: [IconModule, NgIf, ButtonModule],
})
export class ScrollToTopModule {}
