import { NgModule } from '@angular/core';

import { SafeHtmlPipe } from './safehtml.pipe';

@NgModule({
  declarations: [SafeHtmlPipe],
  exports: [SafeHtmlPipe],
})
export class SafeHtmlModule {}
