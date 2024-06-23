import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface CheckboxItem {
  label: string;
  value?: string | number;
  isChecked?: boolean;
}

type CheckboxType = CheckboxItem | string | number;

@Component({
  selector: 'mem-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef((): typeof CheckboxComponent => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  // @ts-ignore
  @Input() public items: CheckboxType[];
  @Input() public formControlName: string = '';
  @Input() public isStacked: boolean = false;
  @Input() public checkedValues?: (number | string)[] = [];
  @Input() public isChecked: boolean = false;
  @Input() public groupLabel: string = '';

  // @Todo: if label is not specified - use value if available
  // @Todo:checkbox should work as a standalone thing as well not only as a list

  @Output() checkedItems: EventEmitter<(number | string)[]> = new EventEmitter<(number | string)[]>();
  @Output() isSelectedChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public dataSet: CheckboxItem[] = [];

  public ngOnInit(): void {
    if (!this.formControlName) {
      this.setDataForNonFormCheckbox();
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

  public writeValue(checkedValues: (number | string)[]): void {
    this.setDataSet(checkedValues);
  }

  public onClick(checkedItem: number | string | undefined): void {
    this.selectItems(checkedItem);
  }

  public onKeyUp($event: KeyboardEvent, checkedItem: number | string | undefined): void {
    if ($event.code === 'Space' || $event.key === 'Enter') {
      this.selectItems(checkedItem);
    }
  }

  private selectItems(checkedItem: number | string | undefined): void {
    this.dataSet.forEach((el): void => {
      if (el.value === checkedItem) {
        el.isChecked = !el.isChecked;
      }
    });

    const checkedItems: (string | number)[] = this.dataSet.filter((el) => el.isChecked).map((el) => el.value) as (string | number)[];
    const isSelectedChecked = this.dataSet.find((el) => el.value === checkedItem)?.isChecked;

    this.onChange(checkedItems);
    this.checkedItems.emit(checkedItems);
    console.log('checkedItem', checkedItem);
    this.isSelectedChecked.emit(isSelectedChecked);
  }

  private setDataForNonFormCheckbox(): void {
    // this is used for standalone, non-forms selects
    // @ts-ignore
    this.setDataSet(this.checkedValues);
  }

  private setDataSet(checkedValues: (number | string)[]): void {
    // array of strings or array of objects
    if (typeof this.items === 'object' && Array.isArray(this.items) && this.items.length) {
      // array of strings
      if (typeof this.items[0] === 'string') {
        this.dataSet = this.items.map(
          (record: CheckboxType): CheckboxItem => ({
            value: <string>record,
            label: <string>record,
            ...(checkedValues.includes(record as string | number) && { isChecked: true }),
          }),
        );
      }

      if (typeof this.items[0] === 'number') {
        this.dataSet = this.items.map(
          (record: CheckboxType): CheckboxItem => ({
            value: Number(record),
            label: <string>record,
            ...(checkedValues.includes(record as string | number) && { isChecked: true }),
          }),
        );
      }

      // array of objects - value can be optional (we can use label instead)
      if (typeof this.items[0] === 'object') {
        this.dataSet = this.items.map((record: CheckboxType): CheckboxItem => {
          return {
            value: (<CheckboxItem>record).value || (<CheckboxItem>record).label,
            label: (<CheckboxItem>record).label,
            ...((checkedValues.includes(record as string | number) || (<CheckboxItem>record).isChecked) && { isChecked: true }),
          };
        });
      }
    }
  }
}
