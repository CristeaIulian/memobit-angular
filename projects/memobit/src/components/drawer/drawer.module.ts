import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon';

import { DrawerComponent } from './drawer.component';

@NgModule({
    declarations: [DrawerComponent],
    exports: [DrawerComponent],
    imports: [IconModule, NgForOf, NgIf],
})
export class DrawerModule {}
