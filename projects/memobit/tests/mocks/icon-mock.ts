import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mem-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '',
})
export class MockMemIconComponent {
  @Input() icon: any;
  @Input() size: any;
}
