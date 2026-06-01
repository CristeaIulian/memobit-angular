import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListItems } from './types';

@Component({
  standalone: false,
  selector: 'mem-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnChanges {
  @Input() public items: ListItems[] = [];

  public expanded: boolean[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['items']) {
      return;
    }

    this.items.forEach((category, index) => {
      const hasSelected = category.items.some((item) => item.isSelected);
      const isFirst = index === 0;

      if (this.expanded[index] === undefined) {
        this.expanded[index] = isFirst || hasSelected;
        return;
      }

      if (hasSelected) {
        this.expanded[index] = true;
      }
    });

    this.expanded.length = this.items.length;
  }

  public toggle(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }
}
