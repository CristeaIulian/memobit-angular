import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'mem-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Input() title: string | null = null;
  @Input() width: number | null = null;
  @Output() private emitClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('modalRef') modalRef: ElementRef | null = null;

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
}
