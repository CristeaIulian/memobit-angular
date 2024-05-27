import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Positions {
  left: number;
  top: number;
}

@Directive({
  selector: '[memContextualMenu]'
})
export class ContextualMenuDirective implements OnDestroy {
  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef, private router: Router, private renderer: Renderer2) {}

  @Input() memContextualMenuPreferredPosition: 'above' | 'below' | 'left' | 'right' = 'below';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() memContextualMenu?: TemplateRef<any> = undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() memContextualMenuData?: Record<string, any> = undefined;

  public containerMenu?: HTMLDivElement;
  public isMenuCreated = false;
  private routeSubscription?: Subscription;
  private windowClickListener?: Function;

  public ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
      this.removeMenu();
    }
  }

  @HostListener('click', ['$event']) onMouseClick(): void {
    if (!this.isMenuCreated) {
      this.setMenu();
    }
  }

  private getPositions = (menuWidth: number, menuHeight: number): Positions => {
    const boundingRect: DOMRect = this.elementRef.nativeElement.getBoundingClientRect();
    const menuPosition = this.memContextualMenuPreferredPosition;
    let positions: Positions | null = null;

    switch (menuPosition) {
      case 'below':
        positions = {
          left: window.scrollX + boundingRect.left,
          top: window.scrollY + boundingRect.top + boundingRect.height
        };
        break;
      case 'above':
        positions = {
          left: window.scrollX + boundingRect.left,
          top: window.scrollY + boundingRect.top - boundingRect.height
        };
        break;
      case 'left':
        positions = {
          left: window.scrollX + boundingRect.left - menuWidth,
          top: window.scrollY + boundingRect.top + boundingRect.height / 2 - menuHeight / 2
        };
        break;
      case 'right':
        positions = {
          left: window.scrollX + boundingRect.left + boundingRect.width,
          top: window.scrollY + boundingRect.top + boundingRect.height / 2 - menuHeight / 2
        };
        break;
    }

    // corrections for screen out of boundaries
    if (positions.left + menuWidth > document.body.clientWidth) {
      positions.left = positions.left - menuWidth + boundingRect.width;
    }
    // @Todo: test/implement for other boundaries as well

    return positions;
  };

  private setMenu(): void {
    this.containerMenu = document.createElement('div');

    this.containerMenu.classList.add('mem-contextual-menu');

    this.viewContainerRef.clear();

    // @ts-ignore
    const embeddedView = this.viewContainerRef.createEmbeddedView(this.memContextualMenu, this.memContextualMenuData);

    embeddedView.rootNodes.forEach((node): void => {
      // @ts-ignore
      this.containerMenu.appendChild(node);
    });

    document.body.append(this.containerMenu);

    setTimeout((): void => {
      // @ts-ignore
      const positions = this.getPositions(this.containerMenu.offsetWidth, this.containerMenu.offsetHeight);

      // @ts-ignore
      this.containerMenu.style.left = `${positions.left}px`;
      // @ts-ignore
      this.containerMenu.style.top = `${positions.top}px`;

      // @ts-ignore
      this.containerMenu.style.opacity = '1';

      this.isMenuCreated = true;
      this.attachWindowListener();
    }, 100);

    this.attachRedirectSubscription();
  }

  private attachWindowListener(): void {
    this.windowClickListener = this.renderer.listen('window', 'click', (): void => {
      this.removeMenu();
    });
  }

  private attachRedirectSubscription(): void {
    this.routeSubscription = this.router.events.subscribe((event): void => {
      if (event instanceof NavigationStart) {
        this.removeMenu();
      }
    });
  }

  private removeMenu(): void {
    // @ts-ignore
    this.containerMenu.style.opacity = '0';
    // @ts-ignore
    this.windowClickListener();

    setTimeout((): void => {
      // @ts-ignore
      this.containerMenu.remove();
      this.viewContainerRef.clear();
      this.isMenuCreated = false;
    }, 500);
  }
}
