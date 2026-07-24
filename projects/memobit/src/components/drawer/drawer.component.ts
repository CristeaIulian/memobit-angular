import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { DrawerItems } from './types';

@Component({
  standalone: false,
  selector: 'mem-drawer',
  templateUrl: './drawer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() public isVisible = false;
  @Input({ required: true }) public items: DrawerItems[] = [];
  @Output() public emitClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public emitLinkClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(public router: Router) {}

  public onItemClicked(path: string): void {
    this.emitLinkClicked.emit(path);
    this.isVisible = false;
  }

  public onClose(): void {
    this.emitClose.emit();
    this.isVisible = false;
  }
}
