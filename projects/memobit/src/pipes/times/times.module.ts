import { NgModule } from "@angular/core";

import { TimesPipe } from './times.pipe';


@NgModule({
  declarations: [TimesPipe],
  exports: [TimesPipe],
})
export class TimesModule {}
