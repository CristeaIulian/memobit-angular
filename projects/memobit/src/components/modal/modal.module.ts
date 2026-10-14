import { NgModule } from '@angular/core';

import { IconModule } from '../icon';

import { ModalComponent } from './modal.component';

@NgModule({
    declarations: [ModalComponent],
    exports: [ModalComponent],
    imports: [IconModule],
})
export class ModalModule {}
