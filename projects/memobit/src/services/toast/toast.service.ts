import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

import { ToastComponent } from './toast.component';
import { ToastOptions, ToastPosition, ToastType } from './types';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private defaultTimeout = 2500;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {}

  public show(options: ToastOptions): void {
    // 1. Create a component reference from the component
    const componentRef: ComponentRef<ToastComponent> = this.componentFactoryResolver.resolveComponentFactory(ToastComponent).create(this.injector);

    componentRef.instance.message = options.message;
    componentRef.instance.type = options.type || ToastType.Info;
    componentRef.instance.position = options.position || ToastPosition.Bottom;

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = <HTMLElement>(<EmbeddedViewRef<unknown>>componentRef.hostView).rootNodes[0];

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout((): void => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, options.timeout || this.defaultTimeout);
  }
}
