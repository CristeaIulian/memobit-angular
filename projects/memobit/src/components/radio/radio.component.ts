import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface RadioItem {
  label: string;
  value?: string | number;
  isChecked?: boolean;
}

type RadioType = RadioItem | string | number;

@Component({
  selector: 'mem-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef((): typeof RadioComponent => RadioComponent),
    },
  ],
})
export class RadioComponent implements ControlValueAccessor, OnInit {
  // @ts-ignore
  @Input() public items: RadioType[];
  @Input() public formControlName: string = '';
  @Input() public isStacked: boolean = false;
  @Input() public checkedValue?: number | string;
  @Input() public isChecked: boolean = false;
  @Input() public groupLabel: string = '';

  // @Todo: if label is not specified - use value if available

  @Output() checkedItem: EventEmitter<number | string> = new EventEmitter<number | string>();

  public dataSet: RadioItem[] = [];

  public ngOnInit(): void {
    if (!this.formControlName) {
      this.setDataForNonFormRadio();
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

  public writeValue(checkedValue: number | string): void {
    this.setDataSet(checkedValue);
  }

  public onClick(checkedItem: number | string | undefined): void {
    this.selectItem(checkedItem);
  }

  public onKeyUp($event: KeyboardEvent, checkedItem: number | string | undefined): void {
    if ($event.code === 'Space' || $event.key === 'Enter') {
      this.selectItem(checkedItem);
    }
  }

  private selectItem(checkedItem: number | string | undefined): void {
    this.dataSet.forEach((el): void => {
      el.isChecked = el.value === checkedItem;

      if (el.value === checkedItem) {
        this.onChange(checkedItem);
        this.checkedItem.emit(checkedItem);
      }
    });
  }

  private setDataForNonFormRadio(): void {
    // this is used for standalone, non-forms selects
    // @ts-ignore
    this.setDataSet(this.checkedValue);
  }

  private setDataSet(checkedValue: number | string): void {
    // array of strings or array of objects
    if (typeof this.items === 'object' && Array.isArray(this.items) && this.items.length) {
      // array of strings
      if (typeof this.items[0] === 'string') {
        this.dataSet = this.items.map(
          (record: RadioType): RadioItem => ({
            value: <string>record,
            label: <string>record,
            ...(record === checkedValue && { isChecked: true }),
          }),
        );
      }

      if (typeof this.items[0] === 'number') {
        this.dataSet = this.items.map(
          (record: RadioType): RadioItem => ({
            value: Number(record),
            label: <string>record,
            ...(record === checkedValue && { isChecked: true }),
          }),
        );
      }

      // array of objects - value can be optional (we can use label instead)
      if (typeof this.items[0] === 'object') {
        this.dataSet = this.items.map((record: RadioType): RadioItem => {
          return {
            value: (<RadioItem>record).value || (<RadioItem>record).label,
            label: (<RadioItem>record).label,
            ...((record === checkedValue || (<RadioItem>record).isChecked) && { isChecked: true }),
          };
        });
      }
    }
  }
}
