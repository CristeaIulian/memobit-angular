import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'mem-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  public isScrollVisible: boolean = false;
  public topPositionViewFrom = 100;

  @HostListener('window:scroll')
  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isScrollVisible = scrollPosition >= this.topPositionViewFrom;
  }

  public goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
