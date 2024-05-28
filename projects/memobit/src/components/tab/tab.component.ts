import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Tab } from './types';

@Component({
  selector: 'mem-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnChanges {
  @Input() public items: Tab[] = [];
  @Input() public activeTab?: string = '';
  @Output() selectedTab: EventEmitter<string> = new EventEmitter<string>();

  public onTabChange(tab: string): void {
    this.activeTab = tab;
    this.selectedTab.emit(tab);
  }

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges['activeTab']) {
      this.activeTab = simpleChanges['activeTab'].currentValue;
    }

    if (simpleChanges['items']?.currentValue.length && simpleChanges['items'].currentValue[0] && !this.activeTab) {
      this.activeTab = simpleChanges['items'].currentValue[0].key;
    }
  }
}
