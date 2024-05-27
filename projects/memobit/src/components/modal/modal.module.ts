import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { IconModule } from '../icon/icon.module';
@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [IconModule]
})
export class ModalModule {}
