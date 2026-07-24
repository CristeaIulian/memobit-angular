import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { ToastPosition, ToastType } from './types';

@Component({
  selector: 'mem-toast',
  templateUrl: './toast.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  @Input() message = '';
  @Input() type?: ToastType = ToastType.Info;
  @Input() position?: ToastPosition = ToastPosition.Bottom;
}

// @Todo: restrict direct component usage. Should be a service instead of a component?
