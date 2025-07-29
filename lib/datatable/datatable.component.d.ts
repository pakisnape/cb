import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DatatableComponent implements OnInit {
    cloneRows: any;
    searchKey: string;
    headerBgColor: string;
    searchable: boolean;
    columns: any[];
    rows: any[];
    constructor();
    ngOnInit(): void;
    onSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatatableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatatableComponent, "cb-datatable", never, { "headerBgColor": "headerBgColor"; "searchable": "searchable"; "columns": "columns"; "rows": "rows"; }, {}, never, never, false, never>;
}
