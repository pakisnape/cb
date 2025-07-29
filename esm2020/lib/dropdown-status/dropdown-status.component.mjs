import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../directives/click-outside.directive";
export class DropdownStatusComponent {
    constructor(elem) {
        this.elem = elem;
        this.status = '';
        this.statusClass = '';
        this.items = [];
        this.currentValueChange = new EventEmitter();
        this.dropdownOpen = false;
        this.currentIndex = -1;
    }
    get dropdownElement() {
        return this.elem.nativeElement.querySelector('.dropdown-list');
    }
    ngOnInit() { }
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
            this.elem.nativeElement
                .querySelectorAll('li')
                .item(this.currentIndex)
                .focus();
        }
        else if ($event.code === 'ArrowDown') {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }
            else if (this.currentIndex < this.items.length - 1) {
                this.currentIndex++;
            }
            this.elem.nativeElement
                .querySelectorAll('li')
                .item(this.currentIndex)
                .focus();
        }
        else if (($event.code === 'Enter' || $event.code === 'NumpadEnter') &&
            this.currentIndex >= 0) {
            this.selectByIndex(this.currentIndex);
        }
        else if ($event.code === 'Escape') {
            this.closeDropdown();
        }
    }
    closeDropdown() {
        this.dropdownElement.setAttribute('aria-expanded', 'false');
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
    out() { }
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? 'true' : 'false');
    }
}
DropdownStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DropdownStatusComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
DropdownStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DropdownStatusComponent, selector: "cb-dropdown-status", inputs: { status: "status", statusClass: "statusClass", items: "items" }, outputs: { currentValueChange: "currentValueChange" }, host: { listeners: { "document:keydown": "handleKeyboardEvents($event)" } }, ngImport: i0, template: "<div class=\"customdropdown status-dropdown {{ statusClass }}\">\n  <div class=\"dropdown\" aria-haspopup=\"listbox\" aria-labelledby=\"dropdown-label\" (click)=\"toggleDropdown()\"\n    (clickOutside)=\"dropdownOpen = false\">\n    {{ status }}\n  </div>\n  <ul class=\"dropdown-list\" aria-expanded=\"false\" [ngClass]=\"{ 'dropdown-open': dropdownOpen }\">\n    <li *ngFor=\"let item of items\" (click)=\"select(item)\">{{ item }}\n    </li>\n  </ul>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.ClickOutsideDirective, selector: "[clickOutside]", outputs: ["clickOutside"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DropdownStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-dropdown-status', host: {
                        '(document:keydown)': 'handleKeyboardEvents($event)',
                    }, template: "<div class=\"customdropdown status-dropdown {{ statusClass }}\">\n  <div class=\"dropdown\" aria-haspopup=\"listbox\" aria-labelledby=\"dropdown-label\" (click)=\"toggleDropdown()\"\n    (clickOutside)=\"dropdownOpen = false\">\n    {{ status }}\n  </div>\n  <ul class=\"dropdown-list\" aria-expanded=\"false\" [ngClass]=\"{ 'dropdown-open': dropdownOpen }\">\n    <li *ngFor=\"let item of items\" (click)=\"select(item)\">{{ item }}\n    </li>\n  </ul>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { status: [{
                type: Input,
                args: ['status']
            }], statusClass: [{
                type: Input,
                args: ['statusClass']
            }], items: [{
                type: Input,
                args: ['items']
            }], currentValueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhdHRlcm4tbGliL3NyYy9saWIvZHJvcGRvd24tc3RhdHVzL2Ryb3Bkb3duLXN0YXR1cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2Ryb3Bkb3duLXN0YXR1cy9kcm9wZG93bi1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7OztBQVd2QixNQUFNLE9BQU8sdUJBQXVCO0lBZWxDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFkbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFdEIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUs3QixpQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWEsQ0FBQztJQU54QyxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBTUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsb0JBQW9CLENBQUMsTUFBcUI7UUFDeEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0wsT0FBTztTQUNSO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxZ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biAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tICcuLi8uLi9tb2RlbHMva2V5LXZhbHVlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2ItZHJvcGRvd24tc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLXN0YXR1cy5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDprZXlkb3duKSc6ICdoYW5kbGVLZXlib2FyZEV2ZW50cygkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TdGF0dXNDb21wb25lbnQge1xuICBASW5wdXQoJ3N0YXR1cycpIHN0YXR1czogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnc3RhdHVzQ2xhc3MnKSBzdGF0dXNDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnaXRlbXMnKSBpdGVtczogYW55ID0gW107XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3VycmVudFZhbHVlOiBLZXlWYWx1ZTtcbiAgcHVibGljIGRyb3Bkb3duT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZ2V0IGRyb3Bkb3duRWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWxpc3QnKTtcbiAgfVxuXG4gIHByaXZhdGUgY3VycmVudEluZGV4ID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBoYW5kbGVLZXlib2FyZEV2ZW50cygkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bk9wZW4pIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgkZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuICAgICAgICAuaXRlbSh0aGlzLmN1cnJlbnRJbmRleClcbiAgICAgICAgLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICgkZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcbiAgICAgICAgLml0ZW0odGhpcy5jdXJyZW50SW5kZXgpXG4gICAgICAgIC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoJGV2ZW50LmNvZGUgPT09ICdFbnRlcicgfHwgJGV2ZW50LmNvZGUgPT09ICdOdW1wYWRFbnRlcicpICYmXG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA+PSAwXG4gICAgKSB7XG4gICAgICB0aGlzLnNlbGVjdEJ5SW5kZXgodGhpcy5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gLTE7XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdEJ5SW5kZXgoaTogbnVtYmVyKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5pdGVtc1tpXTtcbiAgICB0aGlzLnNlbGVjdCh2YWx1ZSk7XG4gIH1cblxuICBzZWxlY3QodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgdGhpcy5jdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gIH1cblxuICBvdXQoKSB7fVxuXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gIXRoaXMuZHJvcGRvd25PcGVuO1xuICAgIHRoaXMuZHJvcGRvd25FbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgICk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjdXN0b21kcm9wZG93biBzdGF0dXMtZHJvcGRvd24ge3sgc3RhdHVzQ2xhc3MgfX1cIj5cbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bi1sYWJlbFwiIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigpXCJcbiAgICAoY2xpY2tPdXRzaWRlKT1cImRyb3Bkb3duT3BlbiA9IGZhbHNlXCI+XG4gICAge3sgc3RhdHVzIH19XG4gIDwvZGl2PlxuICA8dWwgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgW25nQ2xhc3NdPVwieyAnZHJvcGRvd24tb3Blbic6IGRyb3Bkb3duT3BlbiB9XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgKGNsaWNrKT1cInNlbGVjdChpdGVtKVwiPnt7IGl0ZW0gfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+Il19