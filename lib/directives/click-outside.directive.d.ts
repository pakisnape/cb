import { ElementRef, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ClickOutsideDirective {
    private elementRef;
    constructor(elementRef: ElementRef);
    clickOutside: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent, targetElement: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[clickOutside]", never, {}, { "clickOutside": "clickOutside"; }, never, never, false, never>;
}
