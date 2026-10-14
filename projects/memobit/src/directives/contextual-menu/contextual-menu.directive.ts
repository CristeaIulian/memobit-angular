import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Positions {
    left: number;
    top: number;
}

// @Todo: should support arborescence - multi level menu - see mat-menu

@Directive({
    standalone: false,
    selector: '[memContextualMenu]',
})
export class ContextualMenuDirective implements OnDestroy {
    constructor(
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private router: Router,
        private renderer: Renderer2
    ) {}

    @Input() memContextualMenuPreferredPosition: 'above' | 'below' | 'left' | 'right' = 'below';
    @Input() memContextualMenu?: TemplateRef<unknown> = undefined;
    @Input() memContextualMenuData?: Record<string, unknown> = undefined;

    public containerMenu?: HTMLDivElement;
    public isMenuCreated = false;
    private routeSubscription?: Subscription;
    private windowClickListener?: () => void;

    public ngOnDestroy(): void {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
            this.removeMenu();
        }
    }

    @HostListener('click') onMouseClick(): void {
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
                    top: window.scrollY + boundingRect.top + boundingRect.height,
                };
                break;
            case 'above':
                positions = {
                    left: window.scrollX + boundingRect.left,
                    top: window.scrollY + boundingRect.top - boundingRect.height,
                };
                break;
            case 'left':
                positions = {
                    left: window.scrollX + boundingRect.left - menuWidth,
                    top: window.scrollY + boundingRect.top + boundingRect.height / 2 - menuHeight / 2,
                };
                break;
            case 'right':
                positions = {
                    left: window.scrollX + boundingRect.left + boundingRect.width,
                    top: window.scrollY + boundingRect.top + boundingRect.height / 2 - menuHeight / 2,
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
        if (!this.memContextualMenu) {
            return;
        }

        const containerMenu = document.createElement('div');
        this.containerMenu = containerMenu;

        containerMenu.classList.add('mem-contextual-menu');

        this.viewContainerRef.clear();

        const embeddedView = this.viewContainerRef.createEmbeddedView(this.memContextualMenu, this.memContextualMenuData);

        embeddedView.rootNodes.forEach((node): void => {
            containerMenu.appendChild(node);
        });

        document.body.append(containerMenu);

        setTimeout((): void => {
            const positions = this.getPositions(containerMenu.offsetWidth, containerMenu.offsetHeight);

            containerMenu.style.left = `${positions.left}px`;
            containerMenu.style.top = `${positions.top}px`;

            containerMenu.style.opacity = '1';

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
        const containerMenu = this.containerMenu;

        if (!containerMenu) {
            return;
        }

        containerMenu.style.opacity = '0';
        this.windowClickListener?.();

        setTimeout((): void => {
            containerMenu.remove();
            this.viewContainerRef.clear();
            this.isMenuCreated = false;
        }, 500);
    }
}
