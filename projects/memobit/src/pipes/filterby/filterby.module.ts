import { NgModule } from '@angular/core';

import { FilterByPipe } from './filterby.pipe';

@NgModule({
  declarations: [FilterByPipe],
  exports: [FilterByPipe]
})
export class FilterByModule {}
