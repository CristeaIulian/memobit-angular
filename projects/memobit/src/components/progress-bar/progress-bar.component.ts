import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mem-progress-bar',
  templateUrl: './progress-bar.component.html',

  styleUrls: ['./progress-bar.component.scss']
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
