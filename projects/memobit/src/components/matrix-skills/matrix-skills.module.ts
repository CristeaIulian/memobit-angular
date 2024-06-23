import { NgModule } from '@angular/core';

import { MatrixSkillsComponent } from './matrix-skills.component';
import { NgForOf } from '@angular/common';

@NgModule({
  declarations: [MatrixSkillsComponent],
  exports: [MatrixSkillsComponent],
  imports: [NgForOf],
})
export class MatrixSkillsModule {}
