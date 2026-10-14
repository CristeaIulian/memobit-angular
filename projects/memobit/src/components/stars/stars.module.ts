import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';

import { TimesModule } from '../../pipes/times';
import { IconModule } from '../icon';

import { StarsComponent } from './stars.component';

const coreModules = [NgForOf];

@NgModule({
    declarations: [StarsComponent],
    exports: [StarsComponent],
    imports: [...coreModules, IconModule, TimesModule],
})
export class StarsModule {}
