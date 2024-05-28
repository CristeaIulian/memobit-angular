import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[memButton]'
})
export class ButtonDirective implements OnInit, OnChanges {
  constructor(private el: ElementRef) {}

  @Input() memRipple: boolean | undefined = undefined;

  @Input() memVariant: 'text' | 'compact' | 'contained' | 'tab' = 'text';

  @Input() memIsActive: boolean = false;

  public ngOnInit(): void {
    this.setButton();
  }

  public ngOnChanges(): void {
    this.setButton();
  }

  @HostListener('click', ['$event']) onMouseClick($event: MouseEvent): void {
    if (typeof this.memRipple === 'string') {
      // this is a hack to avoid enforcing a value
      this.createRipple($event);
    }
  }

  private setButton(): void {
    this.el.nativeElement.classList.add('mem-button');

    if (this.memIsActive) {
      this.el.nativeElement.classList.add('mem-button-active');
    } else {
      this.el.nativeElement.classList.remove('mem-button-active');
    }

    if (this.memVariant) {
      this.el.nativeElement.classList.add(`mem-button-variant-${this.memVariant}`);
    }
  }

  private createRipple(event: MouseEvent): void {
    const button = this.el.nativeElement;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('mem-ripple');

    const ripple = button.getElementsByClassName('mem-ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
}
