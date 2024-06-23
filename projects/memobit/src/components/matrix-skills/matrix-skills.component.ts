import { Component, Input } from '@angular/core';

import { MatrixItem } from './types';

@Component({
  selector: 'mem-matrix-skills',
  templateUrl: './matrix-skills.component.html',
  styleUrls: ['./matrix-skills.component.scss'],
})
export class MatrixSkillsComponent {
  @Input() public items: MatrixItem[] = [];
  @Input() public levels: string[] = [];
}
