import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mem-delimiter',
  templateUrl: './delimiter.component.html',

  styleUrls: ['./delimiter.component.scss']
})
export class DelimiterComponent implements OnInit {
  @Input() hasVerticalMargins = false;
  @Input() hasTopMargin = false;
  @Input() hasBottomMargin = false;
  @Input() hasCanceledHorizontalMargins = false;
  public cssClasses: string[] = [];

  public ngOnInit(): void {
    this.cssClasses = ['delimiter'];

    if (this.hasVerticalMargins) {
      this.cssClasses.push('delimiter-with-vertical-margins');
    }

    if (this.hasTopMargin) {
      this.cssClasses.push('delimiter-top-margin');
    }

    if (this.hasBottomMargin) {
      this.cssClasses.push('delimiter-bottom-margin');
    }

    if (this.hasCanceledHorizontalMargins) {
      this.cssClasses.push('delimiter-cancel-horizontal-margins');
    }
  }
}
