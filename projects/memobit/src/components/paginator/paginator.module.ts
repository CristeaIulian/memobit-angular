import { NgModule } from '@angular/core';

import { ButtonModule } from '../../directives/button';
import { IconModule } from '../icon';
import { SelectModule } from '../select';

import { PaginatorComponent } from './paginator.component';

@NgModule({
    declarations: [PaginatorComponent],
    exports: [PaginatorComponent],
    imports: [SelectModule, IconModule, ButtonModule],
})
export class PaginatorModule {}
