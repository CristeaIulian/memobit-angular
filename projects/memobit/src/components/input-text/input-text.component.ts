import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface InputTextUpdateEvent {
    value: string;
    $event: KeyboardEvent;
}

@Component({
    standalone: false,
    selector: 'mem-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['input-text-component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef((): typeof InputTextComponent => InputTextComponent),
        },
    ],
})
export class InputTextComponent implements ControlValueAccessor, OnChanges {
    @Input() public formControlName: string = '';
    @Input() public placeholder?: string = '';
    @Input() public value?: string = '';
    @Output() inputText: EventEmitter<InputTextUpdateEvent> = new EventEmitter<InputTextUpdateEvent>();

    public currentValue: string | undefined = '';

    public ngOnChanges(): void {
        if (!this.formControlName) {
            this.setDataForNonFormSelect();
        }
    }

    public onChange: (value: string) => void = (): void => {};

    public onTouch: () => void = (): void => {};

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    public writeValue(value: string): void {
        this.setDataSet(value);
    }

    public onInputChange($event: KeyboardEvent): void {
        const newValue = (<HTMLInputElement>$event.target).value;
        this.onChange(newValue);
        this.inputText.emit({ value: newValue, $event });
    }

    private setDataForNonFormSelect(): void {
        // this is used for standalone, non-forms selects
        this.setDataSet(this.value);
    }

    private setDataSet(value: string | undefined): void {
        this.currentValue = value || '';
    }
}
