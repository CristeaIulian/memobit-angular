import { Component, Input, OnInit } from '@angular/core';
import { IconSize } from '../icon/types';

@Component({
  selector: 'mem-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input()
  set num(stars: number) {
    this._stars = stars;
  }

  get num(): number {
    return this._stars;
  }

  private _stars = 0;
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() halfStars = false;
  // @Todo - fix halfStars: 3.5 => 1.5 stars..
  public className = '';

  public ngOnInit(): void {
    this._setSize();
    this._setHalf();
  }

  // eslint-disable-next-line // @Todo - fix any type
  public getStarType(num: number, i: any): string {
    return !Number.isInteger(num) && this.halfStars && i > num ? 'star-half-full' : 'star';
  }

  public getSize(size: 'small' | 'normal' | 'large'): IconSize | null {
    if (size === 'small') {
      return 16;
    }
    if (size === 'normal') {
      return 24;
    }
    if (size === 'large') {
      return 36;
    }

    return null;
  }

  private _setSize(): void {
    this.className = this.size;
  }

  private _setHalf(): void {
    if (this.halfStars) {
      this.num = this.num / 2;
    }
  }
}
