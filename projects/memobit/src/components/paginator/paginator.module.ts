import { NgModule } from '@angular/core';

import { PaginatorComponent } from './paginator.component';
import { SelectModule } from '../select';
import { IconModule } from '../icon';
import { ButtonModule } from '../../directives/button';
@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [SelectModule, IconModule, ButtonModule],
})
export class PaginatorModule {}
