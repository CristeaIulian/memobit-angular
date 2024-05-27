import { Component, EventEmitter, forwardRef, Input, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mem-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef((): typeof InputNumberComponent => InputNumberComponent)
    }
  ]
})
export class InputNumberComponent implements ControlValueAccessor, OnChanges {
  @Input() public formControlName: string = '';
  @Input() public placeholder?: string = '';
  @Input() public value?: number;
  @Input() public min?: number;
  @Input() public max?: number;
  @Input() public step?: number;
  @Output() inputNumber: EventEmitter<number> = new EventEmitter<number>();

  public currentValue?: number = undefined;

  public ngOnChanges(): void {
    if (!this.formControlName) {
      this.setDataForNonFormSelect();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-empty-function
  public onChange: any = (): void => {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-empty-function
  public onTouch: any = (): void => {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public writeValue(value: number): void {
    this.setDataSet(value);
  }

  public onInputChange($event: Event): void {
    const newValue = (<HTMLInputElement>$event.target).value;
    this.onChange(newValue);
    this.inputNumber.emit(Number(newValue));
  }

  private setDataForNonFormSelect(): void {
    // this is used for standalone, non-forms selects
    this.setDataSet(this.value);
  }

  private setDataSet(value: number | undefined): void {
    this.currentValue = value;
  }
}
