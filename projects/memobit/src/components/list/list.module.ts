import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [RouterLink, NgForOf]
})
export class ListModule {}
