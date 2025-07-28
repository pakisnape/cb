import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cb-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  cloneRows: any;
  searchKey: string = '';
  @Input('headerBgColor') headerBgColor: string = '';
  @Input('searchable') searchable: boolean = false;
  @Input('columns') columns: any[];
  @Input('rows') rows: any[];

  constructor() { }

  ngOnInit(): void {
    this.cloneRows = this.rows;
  }

  onSearch() {
    var searchKey = this.searchKey.toLocaleLowerCase('en-US');
    this.cloneRows = this.rows.filter((val: any) => {
      let rVal = false;
      this.columns.forEach(element => {
        let value = val[element].toString();
        value = value.toLocaleLowerCase('en-US');
        if (value.includes(searchKey)) {
            rVal = true;
        }
      });
      return rVal;
    })
  }
}
