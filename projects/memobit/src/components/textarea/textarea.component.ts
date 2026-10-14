import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    standalone: false,
    selector: 'mem-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef((): typeof TextareaComponent => TextareaComponent),
        },
    ],
})
export class TextareaComponent implements ControlValueAccessor, OnChanges {
    @Input() public formControlName: string = '';
    @Input() public placeholder?: string = '';
    @Input() public value?: string;
    @Input() public rows?: number = 4;
    @Output() inputTextarea: EventEmitter<string> = new EventEmitter<string>();

    public currentValue: string | undefined = '';

    public ngOnChanges(): void {
        if (!this.formControlName) {
            this.setDataForNonFormSelect();
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public onChange: any = (): void => {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public onTouch: any = (): void => {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    public writeValue(value: string): void {
        this.setDataSet(value);
    }

    public onTextareaChange($event: Event): void {
        const newValue = (<HTMLInputElement>$event.target).value;
        this.onChange(newValue);
        this.inputTextarea.emit(newValue);
    }

    private setDataForNonFormSelect(): void {
        // this is used for standalone, non-forms selects
        this.setDataSet(this.value);
    }

    private setDataSet(value?: string): void {
        this.currentValue = value || '';
    }
}
