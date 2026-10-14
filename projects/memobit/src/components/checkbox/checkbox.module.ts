import { NgClass, NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent],
    imports: [NgClass, IconModule, NgForOf],
})
export class CheckboxModule {}
