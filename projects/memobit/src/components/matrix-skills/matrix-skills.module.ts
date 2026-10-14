import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatrixSkillsComponent } from './matrix-skills.component';

@NgModule({
    declarations: [MatrixSkillsComponent],
    exports: [MatrixSkillsComponent],
    imports: [NgForOf],
})
export class MatrixSkillsModule {}
