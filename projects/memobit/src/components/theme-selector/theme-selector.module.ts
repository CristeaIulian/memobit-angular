import { NgModule } from '@angular/core';

import { SelectModule } from '../select/select.module';

import { ThemeSelectorComponent } from './theme-selector.component';

@NgModule({
    declarations: [ThemeSelectorComponent],
    exports: [ThemeSelectorComponent],
    imports: [SelectModule],
})
export class ThemeSelectorModule {}
