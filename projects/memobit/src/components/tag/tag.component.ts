import { Component, Input } from '@angular/core';

import { Tag } from './types';

@Component({
  selector: 'mem-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() tag: Tag | undefined = undefined;
}
