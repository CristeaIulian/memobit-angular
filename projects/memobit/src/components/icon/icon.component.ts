import { Component, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit, OnInit } from '@angular/core';

import { IconSize, iconsList } from './types';

@Component({
  selector: 'mem-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() icon: string = '';
  @Input() size: IconSize = 20;
  @Input() color?: string;

  constructor(private svgIconContainer: ElementRef) {}

  public ngOnInit() {
    if (this.icon && !iconsList.includes(this.icon)) {
      console.warn(`Could not find icon with name: ${this.icon} in the list of available icons.`);
    }
  }

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges['color']) {
      this.setIconColors();
    }
  }

  public ngAfterViewInit(): void {
    this.setIconColors();
  }

  private setIconColors(): void {
    if (!this.color) {
      return;
    }

    // apply fill color on svg tag
    const svgElement = this.svgIconContainer.nativeElement.querySelector('svg');

    if (!svgElement) {
      return;
    }

    const svgFillColor = svgElement.getAttribute('fill');

    if (svgFillColor !== null && svgFillColor !== 'none') {
      svgElement.style.fill = this.color;
    }

    const pathsSvgElements = <SVGPathElement[]>this.svgIconContainer.nativeElement.querySelectorAll('svg path');

    Array.from(pathsSvgElements).forEach((pathSvgElement: SVGElement): void => {
      const pathSvgFillColor = pathSvgElement.getAttribute('fill');

      if (pathSvgFillColor !== null && pathSvgFillColor !== 'none') {
        pathSvgElement.style.fill = this.color || '';
      }
    });
  }
}
