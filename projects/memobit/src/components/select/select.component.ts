import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DataSet, SelectedOption } from './types';

@Component({
  selector: 'mem-select',
  templateUrl: './select.component.html',
  styleUrls: ['select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef((): typeof SelectComponent => SelectComponent),
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnChanges {
  @Input() public multiple: boolean = false;
  @Input() public hasFilter?: boolean;
  @Input() public items: (DataSet | string | number)[] = [];
  @Input() public formControlName: string = '';
  @Input() public placeholder?: string;
  @Input() public selected?: SelectedOption;
  // @Todo: check if selected is done via selected and items.isSelected at the same time and throw an error
  @Input() public variant?: 'normal' | 'compact' = 'normal';
  @Output() selectItems: EventEmitter<SelectedOption> = new EventEmitter<SelectedOption>();

  public selectedItems: DataSet[] = [];
  public selectedValue = '';
  public receivedSelectedValues: SelectedOption | null = null;
  public dataSet: DataSet[] = [];
  public dataSetFiltered: DataSet[] = [];
  public isListVisible = false;
  public filterText = '';

  constructor(private elementRef: ElementRef) {}

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

  public writeValue(selected: SelectedOption): void {
    this.setDataSet(selected);
  }

  @HostListener('document:click', ['$event']) onMouseClick(event: Event): void {
    if (!this.isListVisible) {
      return;
    }

    const label = this.elementRef.nativeElement.querySelector('.mem-select-label');
    const dropdown = this.elementRef.nativeElement.querySelector('.mem-select-dropdown');
    const dropdownItems = this.elementRef.nativeElement.querySelectorAll('.mem-select-item');

    let isClickedAnyOfList = false;

    Array.from(dropdownItems).forEach((item): void => {
      if ((<HTMLElement>item).contains(<HTMLElement>event.target)) {
        isClickedAnyOfList = true;
      }
    });
    const isCheckbox = (<HTMLInputElement>event.target).type;

    if (dropdown && !dropdown.contains(event.target) && !label.contains(event.target) && !isClickedAnyOfList && !isCheckbox) {
      this.isListVisible = false;
    }
  }

  public onLabelClick(): void {
    this.openDropdown();
  }

  public onItemSelected(el: DataSet): void {
    this.isListVisible = false;

    this.selectedItems.length = 0;
    this.selectedItems.push(el);

    this.selectedValue = el.id ? el.label : '';
    this.onChange(el.id);
    this.updateSingleDataSet(el.id);

    // this is used for standalone, non-forms selects
    this.selectItems.emit(el.id);
  }

  public onItemsSelected(el: DataSet, isChecked: boolean): void {
    if (isChecked) {
      this.selectedItems.push(el);
    } else {
      const indexItem = this.selectedItems.findIndex((selItem): boolean => selItem.id === el.id);
      this.selectedItems.splice(indexItem, 1);
    }

    const selectedIds: SelectedOption = this.selectedItems.map((item): number => <never>item.id);

    // @ts-ignore
    this.selectedValue = selectedIds.map((selectedId): string => this.dataSet.find((item): boolean => item.id === selectedId).label).join(', ');

    this.onChange(selectedIds);

    this.updateMultiDataSet(selectedIds);

    // this is used for standalone, non-forms selects
    this.selectItems.emit(selectedIds);
  }

  public onFilterList(filterText: string): void {
    this.filterText = filterText;
    this.dataSetFiltered = this.dataSet.filter((item): boolean => item.label.toLowerCase().includes(filterText.toLowerCase()));
  }

  public onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'ArrowDown' || $event.key === 'ArrowUp' || $event.key === 'Enter') {
      this.openDropdown();
    }
  }

  private openDropdown(): void {
    setTimeout((): void => {
      this.isListVisible = !this.isListVisible;

      if (this.isListVisible) {
        this.determineDropDownDisplayPosition();

        if (this.hasFilter && this.dataSet.length) {
          setTimeout((): void => {
            const filter = this.elementRef.nativeElement.querySelector(`.mem-input-text input[type="text"]`);
            filter.focus();
          }, 50);
        }
      }
    }, 50);
  }

  private determineDropDownDisplayPosition(): void {
    setTimeout((): void => {
      const dropdown = this.elementRef.nativeElement.querySelector('.mem-select-dropdown');
      const dropdownBoundingRect: DOMRect = dropdown.getBoundingClientRect();
      let marginTop: string = '0';

      if (dropdownBoundingRect.top + dropdownBoundingRect.height > document.body.clientHeight) {
        const label = this.elementRef.nativeElement.querySelector('.mem-select-label');
        const labelBoundingRect: DOMRect = label.getBoundingClientRect();
        marginTop = `-${dropdownBoundingRect.height + labelBoundingRect.height}px`;
      }

      dropdown.style.marginTop = marginTop;
    }, 50);
  }

  private setDataForNonFormSelect(): void {
    // this is used for standalone, non-forms selects
    this.setDataSet(this.selected);
  }

  private setDataSet(selected: SelectedOption | undefined): void {
    const data: DataSet[] = this.items.map((item): DataSet => {
      if (typeof item === 'string' || typeof item === 'number') {
        const isSelected = !!(
          selected &&
          ((Array.isArray(selected) && selected.includes(<never>item)) ||
            (!Array.isArray(selected) && String(item).toLowerCase().includes(String(selected).toLowerCase())))
        );

        return {
          id: item,
          label: String(item),
          isSelected,
        };
      } else {
        const isSelected =
          selected &&
          ((Array.isArray(selected) && selected.includes(<never>item)) ||
            (!Array.isArray(selected) && String(item.id).toLowerCase().includes(String(selected).toLowerCase())));

        const isSelectedOption = item.isSelected || isSelected;

        return {
          id: item.id,
          label: item.label,
          ...(isSelectedOption && { isSelected: isSelectedOption }),
          ...(item.tag && { tag: item.tag }),
        };
      }
    });

    this.selectedItems = data.reduce((acc: DataSet[], el: DataSet): DataSet[] => {
      if ((typeof selected === 'number' || typeof selected === 'string') && selected === el.id) {
        acc.push(el);
      }

      if (typeof selected === 'object' && Array.isArray(selected) && selected.includes(<never>el.id)) {
        acc.push(el);
      }

      return acc;
    }, []);

    // @ts-ignore
    this.receivedSelectedValues = selected;
    this.selectedValue = data
      .reduce((acc: string[], item): string[] => {
        if ((typeof selected === 'number' || typeof selected === 'string') && item.id === selected && item.id) {
          acc.push(item.label);
        }

        if (
          typeof selected === 'object' &&
          Array.isArray(selected) &&
          ((typeof item.id === 'string' && selected.includes(<never>item.id.toLowerCase())) ||
            (typeof item.id === 'number' && selected.includes(<never>item.id)))
        ) {
          acc.push(item.label);
        }

        return acc;
      }, [])
      .join(', ');

    this.dataSet = data.map((item): DataSet => {
      let isSelected = false;

      if (typeof selected === 'number') {
        if (item.id === selected) {
          isSelected = true;
        }
      }

      if (Array.isArray(selected)) {
        if (selected.includes(<never>item.id)) {
          isSelected = true;
        }
      }

      return {
        ...item,
        ...(isSelected && { isSelected: true }),
      };
    });

    this.dataSetFiltered = this.dataSet.map((item): DataSet => ({ ...item }));
  }

  private updateSingleDataSet(id: number | string): void {
    this.dataSet.forEach((el): void => {
      el.isSelected = String(el.id).toLowerCase() === String(id).toLowerCase();
    });
    this.dataSetFiltered = this.dataSet.map((item): DataSet => ({ ...item }));
  }

  private updateMultiDataSet(ids: (number | string)[]): void {
    this.dataSet.forEach((el): void => {
      el.isSelected = ids.includes(el.id);
    });
    this.dataSetFiltered = this.dataSet.map((item): DataSet => ({ ...item }));
  }
}
