import { NgModule } from '@angular/core';

import { SecondsToHumanPipe } from './secondstohuman.pipe';

@NgModule({
  declarations: [SecondsToHumanPipe],
  exports: [SecondsToHumanPipe]
})
export class SecondsToHumanModule {}
