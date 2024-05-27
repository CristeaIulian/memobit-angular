import { Component, Input } from '@angular/core';

import { ToastPosition, ToastType } from './types';

@Component({
  selector: 'mem-toast',
  templateUrl: './toast.component.html',
  standalone: true,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message = '';
  @Input() type?: ToastType = ToastType.Info;
  @Input() position?: ToastPosition = ToastPosition.Bottom;
}

// @Todo: restrict direct component usage. Should be a service instead of a component?
