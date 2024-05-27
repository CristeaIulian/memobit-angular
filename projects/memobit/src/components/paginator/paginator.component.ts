import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

interface PaginatorOptions {
  numberOfRecords?: number;
  currentPage?: number;
  recordsPerPage?: number;
}

@Component({
  selector: 'mem-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef((): typeof PaginatorComponent => PaginatorComponent)
    }
  ]
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() public numberOfRecords: number = 0;
  @Input() public currentPage: number = 0;
  @Input() public recordsPerPage: number = 0;
  @Input() public recordsPerPageOptions: number[] = [5, 10, 25, 50, 100];
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() recordsPerPageChanged: EventEmitter<number> = new EventEmitter<number>();

  public recordsFrom: number = 0;
  public recordsTo: number = 0;
  public recordsPerPageDropdownOptions: { id: number; label: string }[] = [];

  public ngOnInit(): void {
    this.calculatePaginator({ numberOfRecords: this.numberOfRecords, currentPage: this.currentPage, recordsPerPage: this.recordsPerPage });
    this.recordsPerPageDropdownOptions = this.recordsPerPageOptions.map((recordsPerPage): { id: number; label: string } => ({
      id: recordsPerPage,
      label: recordsPerPage.toString()
    }));

    if (!this.recordsPerPageOptions.includes(this.recordsPerPage)) {
      console.warn('The provided records per page is not in the records per page options. Defaulting to the first option.');
      this.recordsPerPage = this.recordsPerPageOptions[0];
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const options: PaginatorOptions = {};

    if (changes['currentPage']) {
      options.currentPage = changes['currentPage'].currentValue;
    }

    if (changes['numberOfRecords']) {
      options.numberOfRecords = changes['numberOfRecords'].currentValue;
    }

    if (changes['recordsPerPage']) {
      options.recordsPerPage = changes['recordsPerPage'].currentValue;
    }

    this.calculatePaginator(options);
  }

  public onPageChanged(direction: 'previous' | 'next'): void {
    if (direction === 'previous') {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.currentPage + 1;
    }

    this.pageChanged.emit(this.currentPage);
  }

  public onRecordsPerPageChanged(newRecordsPerPage: number | string | number[] | string[]): void {
    this.recordsPerPageChanged.emit(Number(newRecordsPerPage));
  }

  private calculatePaginator(options?: PaginatorOptions): void {
    // @ts-ignore
    const currentPage = typeof options.currentPage !== 'undefined' ? options.currentPage : this.currentPage;
    // @ts-ignore
    const recordsPerPage = typeof options.recordsPerPage !== 'undefined' ? options.recordsPerPage : this.recordsPerPage;
    // @ts-ignore
    const numberOfRecords = typeof options.numberOfRecords !== 'undefined' ? options.numberOfRecords : this.numberOfRecords;

    this.recordsFrom = currentPage * recordsPerPage + 1;
    const maxRecordsTo = currentPage * recordsPerPage + recordsPerPage;
    this.recordsTo = maxRecordsTo > numberOfRecords ? numberOfRecords : maxRecordsTo;
  }
}
