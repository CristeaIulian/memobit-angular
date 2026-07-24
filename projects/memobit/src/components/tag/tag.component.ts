import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Tag } from './types';

@Component({
  standalone: false,
  selector: 'mem-tag',
  templateUrl: './tag.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() tag: Tag | undefined = undefined;
}
