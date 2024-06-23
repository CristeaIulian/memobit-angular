import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb.component';
import { IconModule } from '../icon';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  imports: [IconModule, NgForOf, NgIf, RouterLink],
})
export class BreadcrumbModule {}
