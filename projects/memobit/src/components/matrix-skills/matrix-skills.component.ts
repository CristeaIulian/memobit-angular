import { Component, Input } from '@angular/core';

import { MatrixItem } from './types';

@Component({
  standalone: false,
  selector: 'mem-matrix-skills',
  templateUrl: './matrix-skills.component.html',
  styleUrls: ['./matrix-skills.component.scss'],
})
export class MatrixSkillsComponent {
  @Input() public items: MatrixItem[] = [];
  @Input() public levels: string[] = [];
}
