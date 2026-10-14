import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: false,

    selector: 'mem-icon-image',
    templateUrl: './image.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: [],
})
export class MemIconImageComponent {}
