import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mem-progress-bar',
  templateUrl: './progress-bar.component.html',

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number = 0;
  public barWidth: number = 0;

  public ngOnInit(): void {
    this.barWidth = this.value;

    if (this.value > 100) {
      this.barWidth = 100;
    }
  }
}
