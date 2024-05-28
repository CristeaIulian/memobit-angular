import { Component, Input } from '@angular/core';

@Component({
  selector: 'mem-icon',
  standalone: true,
  template: ''
})
export class MockMemIconComponent {
  @Input() icon: any;
  @Input() size: any;
}
