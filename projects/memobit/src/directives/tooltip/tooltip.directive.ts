import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[memTooltip]'
})
export class TooltipDirective implements OnDestroy {
  constructor(private el: ElementRef, private tooltipRef: ElementRef) {}

  @Input() memTooltip? = '';
  @Input() memTooltipPosition: 'above' | 'below' | 'left' | 'right' = 'below';

  @HostListener('mouseenter') onMouseEnter(): void {
    if (!this.memTooltip) {
      return;
    }

    this.setTooltip();
  }

  public ngOnDestroy(): void {
    this.removeTooltip();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (!this.memTooltip) {
      return;
    }

    this.removeTooltip();
  }

  private getPositions = (tooltipWidth: number, tooltipHeight: number): { left: string; top: string } => {
    const boundingRect: DOMRect = this.el.nativeElement.getBoundingClientRect();
    const offset = 10;

    switch (this.memTooltipPosition) {
      case 'below':
        return {
          left: `${window.scrollX + boundingRect.left + boundingRect.width / 2 - tooltipWidth / 2}px`,
          top: `${window.scrollY + boundingRect.top + boundingRect.height + offset}px`
        };
      case 'above':
        return {
          left: `${window.scrollX + boundingRect.left + boundingRect.width / 2 - tooltipWidth / 2}px`,
          top: `${window.scrollY + boundingRect.top - boundingRect.height - offset}px`
        };
      case 'left':
        return {
          left: `${window.scrollX + boundingRect.left - tooltipWidth - offset}px`,
          top: `${window.scrollY + boundingRect.top + boundingRect.height / 2 - tooltipHeight / 2}px`
        };
      case 'right':
        return {
          left: `${window.scrollX + boundingRect.left + boundingRect.width + offset}px`,
          top: `${window.scrollY + boundingRect.top + boundingRect.height / 2 - tooltipHeight / 2}px`
        };
    }
  };

  private setTooltip(): void {
    if (!this.memTooltip) {
      return;
    }

    const divTooltip = document.createElement('div');

    divTooltip.innerText = this.memTooltip;

    divTooltip.classList.add('mem-tooltip');

    this.tooltipRef.nativeElement = divTooltip;

    document.body.append(divTooltip);

    const positions = this.getPositions(divTooltip.offsetWidth, divTooltip.offsetHeight);

    divTooltip.style.left = positions.left;
    divTooltip.style.top = positions.top;
  }

  private removeTooltip(): void {
    this.tooltipRef.nativeElement.remove();
  }
}
