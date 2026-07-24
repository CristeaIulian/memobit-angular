import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mem-indeterminate-progress-bar',
  templateUrl: './indeterminate-progress-bar.component.html',

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./indeterminate-progress-bar.component.scss'],
})
export class IndeterminateProgressBarComponent {}
