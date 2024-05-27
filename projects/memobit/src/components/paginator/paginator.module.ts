import { NgModule } from '@angular/core';

import { PaginatorComponent } from './paginator.component';
import { SelectModule } from '../select/select.module';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '../../directives/button/button.module';
@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [SelectModule, IconModule, ButtonModule]
})
export class PaginatorModule {}
