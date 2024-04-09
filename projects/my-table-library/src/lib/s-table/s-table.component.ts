import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 's-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './s-table.component.html',
  styleUrl: './s-table.component.css',
})
export class STableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() pageSize: number = 5;
  @Input() rowsPerPageOptions: number[] = [];
  @Input() paginationInfoTemplate: string = '';
  @Input() currentPageReportTemplate: string = '';
  @Input() pagination: boolean = true;
  @Output()
  sort: EventEmitter<string> = new EventEmitter<string>();
  totalPagesArray: number[] = [];

  sortedColumn: any;
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage: number = 1;
  constructor() {}

  ngOnInit() {
    this.calculateTotalPages();
  }

  get first(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get last(): number {
    console.log('last this.totalRecords', this.totalRecords);
    return Math.min(this.currentPage * this.pageSize, this.totalRecords);
  }

  get totalRecords(): number {
    return this.data ? this.data.length : 0;
  }

  onPageSizeChange() {
    this.currentPage = 1;
    this.performSorting();
  }

  get totalPages(): number {
    this.calculateTotalPages();
    return Math.ceil(this.data.length / this.pageSize);
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  calculateTotalPages() {
    console.log('this.totalRecords', this.totalRecords);
    console.log('this.pageSize', this.pageSize);

    this.totalPagesArray = Array.from(
      { length: Math.ceil(this.totalRecords / this.pageSize) },
      (_, i) => i + 1
    );
    console.log(this.totalPagesArray);
  }

  sortData(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.sort.emit(`${this.sortedColumn},${this.sortDirection}`);
    this.performSorting();
  }

  performSorting() {
    if (this.sortedColumn !== null) {
      this.data.sort((a, b) => {
        const valA = a[this.sortedColumn];
        const valB = b[this.sortedColumn];

        // Handle null values
        if (valA == null && valB == null) return 0;
        if (valA == null) return this.sortDirection === 'asc' ? -1 : 1;
        if (valB == null) return this.sortDirection === 'asc' ? 1 : -1;

        // Perform sorting based on value types
        if (typeof valA === 'string' && typeof valB === 'string') {
          return this.sortDirection === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        } else {
          return this.sortDirection === 'asc' ? valA - valB : valB - valA;
        }
      });
    }
  }

  goToPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }

  isPaginationEnabled(): boolean {
    return this.pagination && this.data && this.data.length > this.pageSize;
  }
}
