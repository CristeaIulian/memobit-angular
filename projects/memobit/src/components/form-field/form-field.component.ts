import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'mem-form-field',
  templateUrl: './form-field.component.html',

  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements AfterContentInit {
  constructor(private elementRef: ElementRef) {}

  public ngAfterContentInit(): void {
    this.setupPrefixIcon();
    this.setupSuffixIcon();
  }

  private setupPrefixIcon(): void {
    const hasFormPrefix = !!this.elementRef.nativeElement.querySelector('.mem-form-prefix');

    if (hasFormPrefix) {
      this.elementRef.nativeElement.classList.add('has-form-field-prefix');
    }
  }

  private setupSuffixIcon(): void {
    const hasFormSuffix = !!this.elementRef.nativeElement.querySelector('.mem-form-suffix');
    const hasMemSelect = !!this.elementRef.nativeElement.querySelector('mem-select');

    if (hasFormSuffix && hasMemSelect) {
      this.elementRef.nativeElement.classList.add('has-form-field-suffix');
    }
  }
}
