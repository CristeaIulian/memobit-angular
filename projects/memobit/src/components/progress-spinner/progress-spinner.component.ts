import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mem-progress-spinner',
  templateUrl: './progress-spinner.component.html',

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {}
