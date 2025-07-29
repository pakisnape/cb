import { ElementRef, EventEmitter } from '@angular/core';
import { KeyValue } from '../../models/key-value';
import * as i0 from "@angular/core";
export declare class DropdownStatusComponent {
    private elem;
    status: string;
    statusClass: string;
    items: any;
    currentValueChange: EventEmitter<any>;
    currentValue: KeyValue;
    dropdownOpen: boolean;
    get dropdownElement(): Element;
    private currentIndex;
    constructor(elem: ElementRef);
    ngOnInit(): void;
    handleKeyboardEvents($event: KeyboardEvent): void;
    closeDropdown(): void;
    selectByIndex(i: number): void;
    select(value: any): void;
    out(): void;
    toggleDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownStatusComponent, "cb-dropdown-status", never, { "status": "status"; "statusClass": "statusClass"; "items": "items"; }, { "currentValueChange": "currentValueChange"; }, never, never, false, never>;
}
