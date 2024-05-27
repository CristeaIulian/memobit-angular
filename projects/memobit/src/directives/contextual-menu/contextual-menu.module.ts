import { NgModule } from '@angular/core';

import { ContextualMenuDirective } from './contextual-menu.directive';

@NgModule({
  declarations: [ContextualMenuDirective],
  exports: [ContextualMenuDirective]
})
export class ContextualMenuModule {}
