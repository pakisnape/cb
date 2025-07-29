import { EventEmitter, ElementRef } from '@angular/core';
import { KeyValue } from '../../models/key-value';
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    private elem;
    type: string;
    disabled: boolean;
    placeholder: string;
    custom: boolean;
    items: KeyValue[];
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
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "cb-dropdown", never, { "type": "type"; "disabled": "disabled"; "placeholder": "placeholder"; "custom": "custom"; "items": "items"; }, { "currentValueChange": "currentValueChange"; }, never, never, false, never>;
}
