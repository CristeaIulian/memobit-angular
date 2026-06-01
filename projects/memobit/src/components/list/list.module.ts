import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { RouterLink } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { IconModule } from '../icon';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [RouterLink, NgForOf, NgIf, IconModule],
})
export class ListModule {}
