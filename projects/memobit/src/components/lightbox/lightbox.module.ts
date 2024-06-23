import { NgModule } from '@angular/core';

import { IconModule } from '../icon';

import { LightboxComponent } from './lightbox.component';
import { NgIf } from '@angular/common';
import { ButtonModule } from '../../directives/button';
@NgModule({
  declarations: [LightboxComponent],
  exports: [LightboxComponent],
  imports: [IconModule, NgIf, ButtonModule],
})
export class LightboxModule {}
