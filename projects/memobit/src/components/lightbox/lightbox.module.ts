import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../../directives/button';
import { IconModule } from '../icon';

import { LightboxComponent } from './lightbox.component';

@NgModule({
    declarations: [LightboxComponent],
    exports: [LightboxComponent],
    imports: [IconModule, NgIf, ButtonModule],
})
export class LightboxModule {}
