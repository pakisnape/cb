import { Component, EventEmitter, Input, Output, OnInit, ElementRef } from '@angular/core';
import { Sort } from '../../models/sort';
import { TableAction } from '../../models/table-action';
import { TableColumn } from '../../models/table-column';

@Component({
  selector: 'cb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('sort') sort: Sort; 
  selectedRow: any;
  @Input('isLoading') isLoading: boolean = true;
  @Input('customSortable') customSortable: boolean = false;
  @Input('sortable') sortable: boolean = true;
  @Input('columns') columns: TableColumn[];
  @Input('rows') rows: any[];
  @Input('actionDropdownItems') actionDropdownItems: any[];
  @Input('tableClass') tableClass: string = '';
  @Input('tableId') tableId: string = 'cb-table';
  @Input('actions') actions: TableAction[];
  @Output('customSort') customSort = new EventEmitter();
  @Output('rowClick') rowClick = new EventEmitter();
  public dropdownOpen: boolean = false;
  @Output() currentValueChange = new EventEmitter();
  @Output('actionClick') actionClick = new EventEmitter();
  public clickedRow: number
  public get dropdownElement(): Element { return this.elem.nativeElement.querySelector('.dropdown-list') }

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    // if (this.columns != undefined && this.sortable) {
    //   let first_sortable_column = this.columns.filter((column: TableColumn) => {
    //     return column.sortable;
    //   });
    //   this.sort = {
    //     column: first_sortable_column[0].key,
    //     direction: 1,
    //   };
    // }
  }

  onRowItemClick1(data: any) {
    this.selectedRow = data;
    this.rowClick.emit(data);
  }

  actionClicked(data: any) {
    this.actionClick.emit(data);
  }

  closeDropdown() {
    this.dropdownElement.setAttribute('aria-expanded', "false");
    this.dropdownOpen = false;
  }

  select(value: any) {
    this.closeDropdown();
    this.currentValueChange.emit(value);
  }



  toggleDropdown(id: any) {
    this.clickedRow = id;
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
  }

  onSortColumn(column: TableColumn): void {
    if (this.sortable && column.sortable && !this.customSortable) {
      if (this.sort.direction == 1) {
        this.sort.direction = -1;
      } else {
        this.sort.direction = 1;
      }
      if (this.rows != undefined) {
        this.rows.sort((a: any, b: any) => {
          a = a[column.key].value.toString().toLowerCase();
          b = b[column.key].value.toString().toLowerCase();
          return a.localeCompare(b) * this.sort.direction;
        });
      }
      this.sort.column = column.key;
    } else if (this.customSortable) {
      if (this.sort.direction == 1) {
        this.sort.direction = -1;
      } else {
        this.sort.direction = 1;
      }
      this.sort.column = column.key;
      this.customSort.emit(this.sort);
    }
  }
}
