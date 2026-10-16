import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    standalone: false,
    selector: 'mem-input-number',
    templateUrl: './input-number.component.html',
    styleUrls: ['input-number.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef((): typeof InputNumberComponent => InputNumberComponent),
        },
    ],
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

    // An empty field reports null to the form rather than 0.
    public onChange: (value: number | null) => void = (): void => {};

    public onTouch: () => void = (): void => {};

    public registerOnChange(fn: (value: number | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    public writeValue(value: number): void {
        this.setDataSet(value);
    }

    public onInputChange($event: Event): void {
        const newValue = (<HTMLInputElement>$event.target).value;
        this.onChange(newValue === '' ? null : Number(newValue));
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
