import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbOption } from './types';

@Component({
  standalone: false,
  selector: 'mem-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbOption[] = [];
}
