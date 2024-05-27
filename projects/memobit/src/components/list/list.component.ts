import { Component, Input } from '@angular/core';
import { ListItems } from './types';

@Component({
  selector: 'mem-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() public items: ListItems[] = [];
}
