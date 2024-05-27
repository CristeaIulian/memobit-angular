import { NgModule } from '@angular/core';

import { DrawerComponent } from './drawer.component';
import { IconModule } from '../icon/icon.module';
import { NgForOf, NgIf } from '@angular/common';
@NgModule({
  declarations: [DrawerComponent],
  exports: [DrawerComponent],
  imports: [IconModule, NgForOf, NgIf]
})
export class DrawerModule {}
