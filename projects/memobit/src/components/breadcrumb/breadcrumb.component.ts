import { Component, Input } from '@angular/core';
import { BreadcrumbOption } from './types';

@Component({
  selector: 'mem-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbOption[] = [];
}
