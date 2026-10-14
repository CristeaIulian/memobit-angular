import { NgClass, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckboxModule } from '../checkbox';
import { IconModule } from '../icon';
import { InputTextModule } from '../input-text';
import { TagModule } from '../tag';

import { SelectComponent } from './select.component';

@NgModule({
    declarations: [SelectComponent],
    exports: [SelectComponent],
    imports: [InputTextModule, NgClass, TagModule, NgIf, IconModule, CheckboxModule, NgForOf],
})
export class SelectModule {}
