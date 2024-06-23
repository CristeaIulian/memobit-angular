import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { LightboxItem } from './types';

@Component({
  selector: 'mem-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements OnChanges, AfterViewInit {
  @Input() title: string | null = null;
  @Input() width: number | null = null;
  @Input() items: LightboxItem[] = [];
  @Input() showNumbers: boolean = false;
  @Output() private emitClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('modalRef') modalRef: ElementRef | null = null;

  public minPosition = 0;
  public maxPosition = 0;
  public currentPosition = 0;
  public selectedItem: LightboxItem | null = null;
  public lightboxTitle: string | null = null;

  public ngOnChanges(): void {
    this.setChainBoundaries();
    this.setImageDetails();
  }

  public ngAfterViewInit(): void {
    if (this.width) {
      if (this.modalRef) {
        this.modalRef.nativeElement.style.maxWidth = `${this.width}px`;
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent($event: KeyboardEvent): void {
    if ($event.key === 'Escape') {
      this.emitClose.emit(true);
    }
  }

  public onClickBackDrop(): void {
    this.emitClose.emit(true);
  }

  public onClickClose(): void {
    this.emitClose.emit(true);
  }

  public onClickPrevious(): void {
    if (this.currentPosition > this.minPosition) {
      this.currentPosition = this.currentPosition - 1;
      this.setImageDetails();
    }
  }

  public onClickNext(): void {
    if (this.currentPosition < this.maxPosition) {
      this.currentPosition = this.currentPosition + 1;
      this.setImageDetails();
    }
  }

  private setChainBoundaries(): void {
    this.maxPosition = this.items.length - 1;
    const currentPosition = this.items.findIndex((item: LightboxItem): boolean | undefined => item.isSelected) || this.minPosition;
    this.currentPosition = currentPosition === -1 ? this.minPosition : currentPosition;
  }

  private setImageDetails(): void {
    this.selectedItem = this.items[this.currentPosition];
    this.lightboxTitle = this.selectedItem?.title || this.title;
  }
}
