import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconModule } from '../icon';

import { ListComponent } from './list.component';

@NgModule({
    declarations: [ListComponent],
    exports: [ListComponent],
    imports: [RouterLink, NgForOf, NgIf, IconModule],
})
export class ListModule {}
