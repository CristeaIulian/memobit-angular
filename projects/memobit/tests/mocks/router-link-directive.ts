// RouterLink stub used to handle [routerLink] directive
import {Directive, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[routerLink]',
  standalone: true,
  host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
