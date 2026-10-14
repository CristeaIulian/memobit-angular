import { NgClass, NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon';

import { RadioComponent } from './radio.component';

@NgModule({
    declarations: [RadioComponent],
    exports: [RadioComponent],
    imports: [NgClass, IconModule, NgForOf],
})
export class RadioModule {}
