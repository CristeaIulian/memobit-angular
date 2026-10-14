import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconModule } from '../icon';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
    declarations: [BreadcrumbComponent],
    exports: [BreadcrumbComponent],
    imports: [IconModule, NgForOf, NgIf, RouterLink],
})
export class BreadcrumbModule {}
