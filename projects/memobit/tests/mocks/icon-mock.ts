import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'mem-icon',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    template: '',
})
export class MockMemIconComponent {
    @Input() icon: unknown;
    @Input() size: unknown;
}
