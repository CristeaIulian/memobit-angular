import { Component, Input } from '@angular/core';
import { AccordionItem } from './types';

@Component({
  selector: 'mem-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() allowMultiOpen: boolean = false;

  constructor() {}

  public onItemClick(currentItem: AccordionItem): void {
    const alreadyOpenedItem = this.items.find((item: AccordionItem): boolean => Boolean(item.isVisible));

    if (alreadyOpenedItem?.title === currentItem.title) {
      alreadyOpenedItem.isVisible = false;
      return;
    }

    if (!this.allowMultiOpen) {
      this.items.forEach((item: AccordionItem): void => {
        item.isVisible = false;
      });
    }

    this.items.forEach((item: AccordionItem): void => {
      if (item.title === currentItem.title) {
        item.isVisible = true;
      }
    });
  }
}
