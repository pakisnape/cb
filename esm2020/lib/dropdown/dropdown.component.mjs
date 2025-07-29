import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../directives/click-outside.directive";
export class DropdownComponent {
    constructor(elem) {
        this.elem = elem;
        this.type = 'normal';
        this.disabled = false;
        this.placeholder = '';
        this.custom = false;
        this.currentValueChange = new EventEmitter();
        this.dropdownOpen = false;
        this.currentIndex = -1;
    }
    get dropdownElement() { return this.elem.nativeElement.querySelector('.dropdown-list'); }
    ngOnInit() {
        this.currentValue = { key: this.placeholder, value: '' };
    }
    handleKeyboardEvents($event) {
        if (this.dropdownOpen) {
            $event.preventDefault();
        }
        else {
            return;
        }
        if ($event.code === 'ArrowUp') {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }
            else if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
        }
        else if ($event.code === 'ArrowDown') {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }
            else if (this.currentIndex < this.items.length - 1) {
                this.currentIndex++;
            }
            this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
        }
        else if (($event.code === 'Enter' || $event.code === 'NumpadEnter') && this.currentIndex >= 0) {
            this.selectByIndex(this.currentIndex);
        }
        else if ($event.code === 'Escape') {
            this.closeDropdown();
        }
    }
    closeDropdown() {
        this.dropdownElement.setAttribute('aria-expanded', "false");
        this.currentIndex = -1;
        this.dropdownOpen = false;
    }
    selectByIndex(i) {
        let value = this.items[i];
        this.select(value);
    }
    select(value) {
        this.currentValue = value;
        this.closeDropdown();
        this.currentValueChange.emit(this.currentValue);
    }
    out() {
        debugger;
    }
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DropdownComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DropdownComponent, selector: "cb-dropdown", inputs: { type: "type", disabled: "disabled", placeholder: "placeholder", custom: "custom", items: "items" }, outputs: { currentValueChange: "currentValueChange" }, host: { listeners: { "document:keydown": "handleKeyboardEvents($event)" } }, ngImport: i0, template: "<div class=\"select {{ type }}\" *ngIf=\"!custom\">\n  <select [attr.disabled]=\"disabled ? 'disabled' : null\">\n    <option *ngIf=\"placeholder !== ''\" value=\"\">{{ placeholder }}</option>\n    <option [value]=\"item.value\" *ngFor=\"let item of items\">\n      {{ item.key }}\n    </option>\n  </select>\n</div>\n\n<div class=\"customdropdown {{ type }}\" *ngIf=\"custom\">\n  <button\n    class=\"dropdown\"\n    aria-haspopup=\"listbox\"\n    aria-labelledby=\"dropdown-label\"\n    (click)=\"toggleDropdown()\"\n    (clickOutside)=\"dropdownOpen = false\"\n  >\n    {{ currentValue.key }}\n  </button>\n  <ul\n    class=\"dropdown-list\"\n    role=\"listbox\"\n    aria-expanded=\"false\"\n    [ngClass]=\"{ 'dropdown-open': dropdownOpen }\"\n  >\n    <li\n      *ngFor=\"let o of items\"\n      [ngClass]=\"{ selected: currentValue === o }\"\n      tabindex=\"0\"\n      (click)=\"select(o)\"\n      role=\"option\"\n      [innerHTML]=\"o.key\"\n    ></li>\n  </ul>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.ClickOutsideDirective, selector: "[clickOutside]", outputs: ["clickOutside"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-dropdown', host: {
                        '(document:keydown)': 'handleKeyboardEvents($event)'
                    }, template: "<div class=\"select {{ type }}\" *ngIf=\"!custom\">\n  <select [attr.disabled]=\"disabled ? 'disabled' : null\">\n    <option *ngIf=\"placeholder !== ''\" value=\"\">{{ placeholder }}</option>\n    <option [value]=\"item.value\" *ngFor=\"let item of items\">\n      {{ item.key }}\n    </option>\n  </select>\n</div>\n\n<div class=\"customdropdown {{ type }}\" *ngIf=\"custom\">\n  <button\n    class=\"dropdown\"\n    aria-haspopup=\"listbox\"\n    aria-labelledby=\"dropdown-label\"\n    (click)=\"toggleDropdown()\"\n    (clickOutside)=\"dropdownOpen = false\"\n  >\n    {{ currentValue.key }}\n  </button>\n  <ul\n    class=\"dropdown-list\"\n    role=\"listbox\"\n    aria-expanded=\"false\"\n    [ngClass]=\"{ 'dropdown-open': dropdownOpen }\"\n  >\n    <li\n      *ngFor=\"let o of items\"\n      [ngClass]=\"{ selected: currentValue === o }\"\n      tabindex=\"0\"\n      (click)=\"select(o)\"\n      role=\"option\"\n      [innerHTML]=\"o.key\"\n    ></li>\n  </ul>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: Input,
                args: ['type']
            }], disabled: [{
                type: Input,
                args: ['disabled']
            }], placeholder: [{
                type: Input,
                args: ['placeholder']
            }], custom: [{
                type: Input,
                args: ['custom']
            }], items: [{
                type: Input,
                args: ['items']
            }], currentValueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGF0dGVybi1saWIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBV25GLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWJyQixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3BCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUUvQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRzdCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFYyxDQUFDO0lBSnpDLElBQVcsZUFBZSxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDO0lBTXRHLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFxQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO2FBQU07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VztzQkFBaEMsS0FBSzt1QkFBQyxhQUFhO2dCQUNILE1BQU07c0JBQXRCLEtBQUs7dUJBQUMsUUFBUTtnQkFDQyxLQUFLO3NCQUFwQixLQUFLO3VCQUFDLE9BQU87Z0JBQ0osa0JBQWtCO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2tleS12YWx1ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NiLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICAgJyhkb2N1bWVudDprZXlkb3duKSc6ICdoYW5kbGVLZXlib2FyZEV2ZW50cygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBzdHJpbmcgPSAnbm9ybWFsJztcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnY3VzdG9tJykgY3VzdG9tOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnaXRlbXMnKSBpdGVtczogS2V5VmFsdWVbXTtcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3VycmVudFZhbHVlOiBLZXlWYWx1ZTtcbiAgcHVibGljIGRyb3Bkb3duT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZ2V0IGRyb3Bkb3duRWxlbWVudCgpOiBFbGVtZW50IHtyZXR1cm4gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWxpc3QnKX1cblxuICBwcml2YXRlIGN1cnJlbnRJbmRleCA9IC0xO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbTogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSB7a2V5OiB0aGlzLnBsYWNlaG9sZGVyLCB2YWx1ZTogJyd9O1xuICB9XG5cbiAgaGFuZGxlS2V5Ym9hcmRFdmVudHMoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd25PcGVuKSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoJGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKS5pdGVtKHRoaXMuY3VycmVudEluZGV4KS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aC0xKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLml0ZW0odGhpcy5jdXJyZW50SW5kZXgpLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICgoJGV2ZW50LmNvZGUgPT09ICdFbnRlcicgfHwgJGV2ZW50LmNvZGUgPT09ICdOdW1wYWRFbnRlcicpICYmIHRoaXMuY3VycmVudEluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0QnlJbmRleCh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmICgkZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bkVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgXCJmYWxzZVwiKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gIH1cblxuICBzZWxlY3RCeUluZGV4KGk6IG51bWJlcikge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuaXRlbXNbaV07XG4gICAgdGhpcy5zZWxlY3QodmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIHRoaXMuY3VycmVudFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5jdXJyZW50VmFsdWUpO1xuICB9XG5cbiAgb3V0KCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICB0b2dnbGVEcm9wZG93bigpIHtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9ICF0aGlzLmRyb3Bkb3duT3BlbjtcbiAgICB0aGlzLmRyb3Bkb3duRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmRyb3Bkb3duT3BlbiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNlbGVjdCB7eyB0eXBlIH19XCIgKm5nSWY9XCIhY3VzdG9tXCI+XG4gIDxzZWxlY3QgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogbnVsbFwiPlxuICAgIDxvcHRpb24gKm5nSWY9XCJwbGFjZWhvbGRlciAhPT0gJydcIiB2YWx1ZT1cIlwiPnt7IHBsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgPG9wdGlvbiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICB7eyBpdGVtLmtleSB9fVxuICAgIDwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY3VzdG9tZHJvcGRvd24ge3sgdHlwZSB9fVwiICpuZ0lmPVwiY3VzdG9tXCI+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cImRyb3Bkb3duXCJcbiAgICBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd24tbGFiZWxcIlxuICAgIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigpXCJcbiAgICAoY2xpY2tPdXRzaWRlKT1cImRyb3Bkb3duT3BlbiA9IGZhbHNlXCJcbiAgPlxuICAgIHt7IGN1cnJlbnRWYWx1ZS5rZXkgfX1cbiAgPC9idXR0b24+XG4gIDx1bFxuICAgIGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiXG4gICAgcm9sZT1cImxpc3Rib3hcIlxuICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgW25nQ2xhc3NdPVwieyAnZHJvcGRvd24tb3Blbic6IGRyb3Bkb3duT3BlbiB9XCJcbiAgPlxuICAgIDxsaVxuICAgICAgKm5nRm9yPVwibGV0IG8gb2YgaXRlbXNcIlxuICAgICAgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogY3VycmVudFZhbHVlID09PSBvIH1cIlxuICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QobylcIlxuICAgICAgcm9sZT1cIm9wdGlvblwiXG4gICAgICBbaW5uZXJIVE1MXT1cIm8ua2V5XCJcbiAgICA+PC9saT5cbiAgPC91bD5cbjwvZGl2PlxuIl19