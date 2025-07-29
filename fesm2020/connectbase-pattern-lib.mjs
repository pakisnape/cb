import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Directive, Output, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2$1 from '@angular/router';
import { RouterModule } from '@angular/router';

class PatternLibService {
    constructor() { }
}
PatternLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PatternLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PatternLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
PatternLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PatternLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: PatternLibComponent, selector: "cb-pattern-lib", ngImport: i0, template: `
    <p>
      pattern-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-pattern-lib', template: `
    <p>
      pattern-lib works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class DatatableComponent {
    constructor() {
        this.searchKey = '';
        this.headerBgColor = '';
        this.searchable = false;
    }
    ngOnInit() {
        this.cloneRows = this.rows;
    }
    onSearch() {
        var searchKey = this.searchKey.toLocaleLowerCase('en-US');
        this.cloneRows = this.rows.filter((val) => {
            let rVal = false;
            this.columns.forEach(element => {
                let value = val[element].toString();
                value = value.toLocaleLowerCase('en-US');
                if (value.includes(searchKey)) {
                    rVal = true;
                }
            });
            return rVal;
        });
    }
}
DatatableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DatatableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatatableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DatatableComponent, selector: "cb-datatable", inputs: { headerBgColor: "headerBgColor", searchable: "searchable", columns: "columns", rows: "rows" }, ngImport: i0, template: "<div *ngIf=\"searchable\" class=\"search\">\n  <label>Search</label>\n  <input\n    type=\"text\"\n    id=\"searchKey\"\n    name=\"searchKey\"\n    [(ngModel)]=\"searchKey\"\n    (keyup)=\"onSearch()\"\n    placeholder=\"type here to search...\"\n  />\n</div>\n<table>\n  <thead [style.background-color]=\"headerBgColor\">\n    <tr>\n      <th nowrap *ngFor=\"let column of columns\">\n        {{ column }}<i class=\"fa fa-chevron-up\"></i>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of cloneRows\">\n      <td nowrap *ngFor=\"let column of columns\">{{ data[column] }}</td>\n    </tr>\n  </tbody>\n  <tfoot class=\"footer\" *ngIf=\"cloneRows.length == 0\">\n    <tr>\n      No records found!\n    </tr>\n  </tfoot>\n</table>\n", styles: ["table{border-spacing:0;width:100%;background:#fff;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}table thead{background:inherit;border-spacing:0;display:table-header-group;vertical-align:middle;border-color:inherit}thead tr{height:56px;background:inherit}thead th{padding-left:24px;border-bottom-width:1px;border-bottom-style:solid;text-align:left;border-bottom-color:#0000001f;color:#0000008a;font-size:16px;font-weight:500}tbody{background:inherit}tbody tr{height:48px}tbody tr td{padding-left:24px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#0000001f;color:#000000de;font-size:14px}.search input{border-color:#0000001f;color:#0000008a;font-size:medium;margin-top:20px;margin-bottom:20px;height:40px;width:300px}.search label{padding-right:20px}.footer{height:50px;text-align:center}.footer tr{vertical-align:middle}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DatatableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-datatable', template: "<div *ngIf=\"searchable\" class=\"search\">\n  <label>Search</label>\n  <input\n    type=\"text\"\n    id=\"searchKey\"\n    name=\"searchKey\"\n    [(ngModel)]=\"searchKey\"\n    (keyup)=\"onSearch()\"\n    placeholder=\"type here to search...\"\n  />\n</div>\n<table>\n  <thead [style.background-color]=\"headerBgColor\">\n    <tr>\n      <th nowrap *ngFor=\"let column of columns\">\n        {{ column }}<i class=\"fa fa-chevron-up\"></i>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of cloneRows\">\n      <td nowrap *ngFor=\"let column of columns\">{{ data[column] }}</td>\n    </tr>\n  </tbody>\n  <tfoot class=\"footer\" *ngIf=\"cloneRows.length == 0\">\n    <tr>\n      No records found!\n    </tr>\n  </tfoot>\n</table>\n", styles: ["table{border-spacing:0;width:100%;background:#fff;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}table thead{background:inherit;border-spacing:0;display:table-header-group;vertical-align:middle;border-color:inherit}thead tr{height:56px;background:inherit}thead th{padding-left:24px;border-bottom-width:1px;border-bottom-style:solid;text-align:left;border-bottom-color:#0000001f;color:#0000008a;font-size:16px;font-weight:500}tbody{background:inherit}tbody tr{height:48px}tbody tr td{padding-left:24px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#0000001f;color:#000000de;font-size:14px}.search input{border-color:#0000001f;color:#0000008a;font-size:medium;margin-top:20px;margin-bottom:20px;height:40px;width:300px}.search label{padding-right:20px}.footer{height:50px;text-align:center}.footer tr{vertical-align:middle}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { headerBgColor: [{
                type: Input,
                args: ['headerBgColor']
            }], searchable: [{
                type: Input,
                args: ['searchable']
            }], columns: [{
                type: Input,
                args: ['columns']
            }], rows: [{
                type: Input,
                args: ['rows']
            }] } });

class ButtonComponent {
    constructor() {
        this.icon = false;
        this.btnLink = '';
        this.img = '';
        this.className = '';
        this.size = '';
        this.label = '';
        this.disabled = false;
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: ButtonComponent, selector: "cb-button", inputs: { icon: "icon", btnLink: "btnLink", img: "img", className: "className", size: "size", label: "label", disabled: "disabled" }, ngImport: i0, template: "<button\n  *ngIf=\"btnLink != ''\"\n  class=\"{{ className }} {{ size }}\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\n  [routerLink]=\"btnLink\"\n>\n  <ng-container *ngIf=\"!icon\">{{ label }}</ng-container>\n  <ng-container *ngIf=\"icon\"><img src=\"{{ img }}\" alt=\"button\" /></ng-container>\n</button>\n\n<button\n  *ngIf=\"btnLink == ''\"\n  class=\"{{ className }} {{ size }}\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\n>\n  <ng-container *ngIf=\"!icon\">{{ label }}</ng-container>\n  <ng-container *ngIf=\"icon\"><img src=\"{{ img }}\" alt=\"button\" /></ng-container>\n</button>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-button', template: "<button\n  *ngIf=\"btnLink != ''\"\n  class=\"{{ className }} {{ size }}\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\n  [routerLink]=\"btnLink\"\n>\n  <ng-container *ngIf=\"!icon\">{{ label }}</ng-container>\n  <ng-container *ngIf=\"icon\"><img src=\"{{ img }}\" alt=\"button\" /></ng-container>\n</button>\n\n<button\n  *ngIf=\"btnLink == ''\"\n  class=\"{{ className }} {{ size }}\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\n>\n  <ng-container *ngIf=\"!icon\">{{ label }}</ng-container>\n  <ng-container *ngIf=\"icon\"><img src=\"{{ img }}\" alt=\"button\" /></ng-container>\n</button>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { icon: [{
                type: Input,
                args: ['icon']
            }], btnLink: [{
                type: Input,
                args: ['btnLink']
            }], img: [{
                type: Input,
                args: ['img']
            }], className: [{
                type: Input,
                args: ['className']
            }], size: [{
                type: Input,
                args: ['size']
            }], label: [{
                type: Input,
                args: ['label']
            }], disabled: [{
                type: Input,
                args: ['disabled']
            }] } });

class AvatarComponent {
    constructor() {
        this.type = 'gold';
        this.label = 'JP';
    }
}
AvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: AvatarComponent, selector: "cb-avatar", inputs: { type: "type", label: "label" }, ngImport: i0, template: "<div class=\"avatar {{type}}\"><span>{{label}}</span></div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-avatar', template: "<div class=\"avatar {{type}}\"><span>{{label}}</span></div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], label: [{
                type: Input,
                args: ['label']
            }] } });

class BadgeComponent {
    constructor() {
        this.type = 'pending';
        this.label = 'Pending';
    }
}
BadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: BadgeComponent, selector: "cb-badge", inputs: { type: "type", label: "label" }, ngImport: i0, template: "<label class=\"badge {{type}}\">{{label}}</label>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-badge', template: "<label class=\"badge {{type}}\">{{label}}</label>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], label: [{
                type: Input,
                args: ['label']
            }] } });

class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
ClickOutsideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ClickOutsideDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ClickOutsideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.1", type: ClickOutsideDirective, selector: "[clickOutside]", outputs: { clickOutside: "clickOutside" }, host: { listeners: { "document:click": "onClick($event,$event.target)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ClickOutsideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[clickOutside]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { clickOutside: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event', '$event.target']]
            }] } });

class DropdownComponent {
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
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DropdownComponent, selector: "cb-dropdown", inputs: { type: "type", disabled: "disabled", placeholder: "placeholder", custom: "custom", items: "items" }, outputs: { currentValueChange: "currentValueChange" }, host: { listeners: { "document:keydown": "handleKeyboardEvents($event)" } }, ngImport: i0, template: "<div class=\"select {{ type }}\" *ngIf=\"!custom\">\n  <select [attr.disabled]=\"disabled ? 'disabled' : null\">\n    <option *ngIf=\"placeholder !== ''\" value=\"\">{{ placeholder }}</option>\n    <option [value]=\"item.value\" *ngFor=\"let item of items\">\n      {{ item.key }}\n    </option>\n  </select>\n</div>\n\n<div class=\"customdropdown {{ type }}\" *ngIf=\"custom\">\n  <button\n    class=\"dropdown\"\n    aria-haspopup=\"listbox\"\n    aria-labelledby=\"dropdown-label\"\n    (click)=\"toggleDropdown()\"\n    (clickOutside)=\"dropdownOpen = false\"\n  >\n    {{ currentValue.key }}\n  </button>\n  <ul\n    class=\"dropdown-list\"\n    role=\"listbox\"\n    aria-expanded=\"false\"\n    [ngClass]=\"{ 'dropdown-open': dropdownOpen }\"\n  >\n    <li\n      *ngFor=\"let o of items\"\n      [ngClass]=\"{ selected: currentValue === o }\"\n      tabindex=\"0\"\n      (click)=\"select(o)\"\n      role=\"option\"\n      [innerHTML]=\"o.key\"\n    ></li>\n  </ul>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: ClickOutsideDirective, selector: "[clickOutside]", outputs: ["clickOutside"] }] });
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

class FormComponent {
    constructor() {
        this.type = '';
    }
}
FormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: FormComponent, selector: "cb-form", inputs: { type: "type", items: "items" }, ngImport: i0, template: "<div *ngFor=\"let item of items\">\n    <label class=\"{{type}}-box\">{{item.label}}\n        <input type=\"{{type}}\" [attr.checked]=\"type == 'checkbox'\" [attr.name]=\"type == 'radio'\">\n        <span class=\"checkmark\"></span>\n    </label>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-form', template: "<div *ngFor=\"let item of items\">\n    <label class=\"{{type}}-box\">{{item.label}}\n        <input type=\"{{type}}\" [attr.checked]=\"type == 'checkbox'\" [attr.name]=\"type == 'radio'\">\n        <span class=\"checkmark\"></span>\n    </label>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input,
                args: ['type']
            }], items: [{
                type: Input,
                args: ['items']
            }] } });

class SearchInputComponent {
    constructor() {
        this.size = 'large';
        this.shape = '';
        this.placeholder = 'Type here...';
    }
}
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: SearchInputComponent, selector: "cb-search-input", inputs: { size: "size", shape: "shape", placeholder: "placeholder" }, ngImport: i0, template: "<input type=\"text\" class=\"formInputText {{size}} {{shape}}\" placeholder=\"{{placeholder}}\"/>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-search-input', template: "<input type=\"text\" class=\"formInputText {{size}} {{shape}}\" placeholder=\"{{placeholder}}\"/>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { size: [{
                type: Input,
                args: ['size']
            }], shape: [{
                type: Input,
                args: ['shape']
            }], placeholder: [{
                type: Input,
                args: ['placeholder']
            }] } });

class SidebarComponent {
    constructor() { }
}
SidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: SidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: SidebarComponent, selector: "cb-sidebar", inputs: { items: "items", settingsLink: "settingsLink" }, ngImport: i0, template: "<nav class=\"sidebar\">\n  <div class=\"top\">\n    <a href=\"#\" class=\"logo\">\n      <img src=\"./assets/icons/nav-bar/logo.svg\" alt=\"Logo\" />\n    </a>\n    <ul>\n      <li\n        *ngFor=\"let item of items\"\n        [routerLink]=\"item.routerLink\"\n        [routerLinkActive]=\"'active'\"\n      >\n        <a>\n          <img src=\"{{ item.img }}\" alt=\"Logo\" />\n          <span>{{ item.label }}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"bottom\">\n    <ul>\n      <li [routerLink]=\"settingsLink\" [routerLinkActive]=\"'active'\">\n        <a>\n          <img src=\"./assets/icons/nav-bar/settings.svg\" alt=\"Logo\" />\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2$1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-sidebar', template: "<nav class=\"sidebar\">\n  <div class=\"top\">\n    <a href=\"#\" class=\"logo\">\n      <img src=\"./assets/icons/nav-bar/logo.svg\" alt=\"Logo\" />\n    </a>\n    <ul>\n      <li\n        *ngFor=\"let item of items\"\n        [routerLink]=\"item.routerLink\"\n        [routerLinkActive]=\"'active'\"\n      >\n        <a>\n          <img src=\"{{ item.img }}\" alt=\"Logo\" />\n          <span>{{ item.label }}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"bottom\">\n    <ul>\n      <li [routerLink]=\"settingsLink\" [routerLinkActive]=\"'active'\">\n        <a>\n          <img src=\"./assets/icons/nav-bar/settings.svg\" alt=\"Logo\" />\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { items: [{
                type: Input,
                args: ['items']
            }], settingsLink: [{
                type: Input,
                args: ['settingsLink']
            }] } });

class StatusIndicatorComponent {
    constructor() {
        this.type = 'pending';
    }
}
StatusIndicatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: StatusIndicatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StatusIndicatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: StatusIndicatorComponent, selector: "cb-status-indicator", inputs: { type: "type" }, ngImport: i0, template: "<span class=\"status {{type}}\"></span>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: StatusIndicatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-status-indicator', template: "<span class=\"status {{type}}\"></span>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input,
                args: ['type']
            }] } });

class StripComponent {
    constructor() {
        this.className = '';
    }
}
StripComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: StripComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StripComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: StripComponent, selector: "cb-strip", inputs: { className: "className" }, ngImport: i0, template: "<div class=\"strip {{ className }}\"></div>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: StripComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-strip', template: "<div class=\"strip {{ className }}\"></div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input,
                args: ['className']
            }] } });

class TableComponent {
    constructor(elem) {
        this.elem = elem;
        this.isLoading = true;
        this.customSortable = false;
        this.sortable = true;
        this.tableClass = '';
        this.tableId = 'cb-table';
        this.customSort = new EventEmitter();
        this.rowClick = new EventEmitter();
        this.dropdownOpen = false;
        this.currentValueChange = new EventEmitter();
        this.actionClick = new EventEmitter();
    }
    get dropdownElement() { return this.elem.nativeElement.querySelector('.dropdown-list'); }
    ngOnInit() {
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
    onRowItemClick1(data) {
        this.selectedRow = data;
        this.rowClick.emit(data);
    }
    actionClicked(data) {
        this.actionClick.emit(data);
    }
    closeDropdown() {
        this.dropdownElement.setAttribute('aria-expanded', "false");
        this.dropdownOpen = false;
    }
    select(value) {
        this.closeDropdown();
        this.currentValueChange.emit(value);
    }
    toggleDropdown(id) {
        this.clickedRow = id;
        this.dropdownOpen = !this.dropdownOpen;
        this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
    }
    onSortColumn(column) {
        if (this.sortable && column.sortable && !this.customSortable) {
            if (this.sort.direction == 1) {
                this.sort.direction = -1;
            }
            else {
                this.sort.direction = 1;
            }
            if (this.rows != undefined) {
                this.rows.sort((a, b) => {
                    a = a[column.key].value.toString().toLowerCase();
                    b = b[column.key].value.toString().toLowerCase();
                    return a.localeCompare(b) * this.sort.direction;
                });
            }
            this.sort.column = column.key;
        }
        else if (this.customSortable) {
            if (this.sort.direction == 1) {
                this.sort.direction = -1;
            }
            else {
                this.sort.direction = 1;
            }
            this.sort.column = column.key;
            this.customSort.emit(this.sort);
        }
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TableComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: TableComponent, selector: "cb-table", inputs: { sort: "sort", isLoading: "isLoading", customSortable: "customSortable", sortable: "sortable", columns: "columns", rows: "rows", actionDropdownItems: "actionDropdownItems", tableClass: "tableClass", tableId: "tableId", actions: "actions" }, outputs: { customSort: "customSort", rowClick: "rowClick", currentValueChange: "currentValueChange", actionClick: "actionClick" }, ngImport: i0, template: "<table class=\"table {{ tableClass }}\" id=\"{{ tableId }}\">\n  <thead>\n    <tr>\n      <th colspan=\"14\" class=\"colspaned\">\n        <table class=\"nested-table\">\n          <colgroup>\n            <col\n              class=\"{{ column.className }}\"\n              *ngFor=\"let column of columns\"\n            />\n          </colgroup>\n          <tr>\n            <th\n              *ngFor=\"let column of columns\"\n              (click)=\"onSortColumn(column)\"\n              class=\"{{ column.className }}\"\n              [ngClass]=\"{\n                sort: column.sortable && sortable\n              }\"\n            >\n              <ng-container *ngIf=\"column.type != 'action'\">\n                {{ column.label }}\n                <img\n                  *ngIf=\"\n                    sort.column == column.key &&\n                    sort.direction == 1 &&\n                    column.sortable &&\n                    sortable\n                  \"\n                  src=\"./assets/icons/arrowdown.svg\"\n                  alt=\"asc\"\n                />\n                <img\n                  *ngIf=\"\n                    sort.column == column.key &&\n                    sort.direction == -1 &&\n                    column.sortable &&\n                    sortable\n                  \"\n                  src=\"./assets/icons/arrowup.svg\"\n                  alt=\"desc\"\n                />\n              </ng-container>\n              <ng-container *ngIf=\"column.type == 'action'\">\n                <button\n                  class=\"settings-btn\"\n                  *ngIf=\"column.label === '' && column.showGear\"\n                >\n                  <img src=\"./assets/icons/nav-bar/settings.svg\" />\n                </button>\n                <ng-container *ngIf=\"column.label !== ''\">{{\n                  column.label\n                }}</ng-container>\n              </ng-container>\n            </th>\n          </tr>\n        </table>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"no-data-row\" *ngIf=\"rows.length === 0 && !isLoading\">\n      <td colspan=\"13\">\n        <span class=\"text\">No records available!</span>\n      </td>\n    </tr>\n    <ng-container *ngIf=\"rows.length > 0\">\n      <tr\n        class=\"expandable\"\n        *ngFor=\"let data of rows; let id = index\"\n        (click)=\"onRowItemClick1(data)\"\n      >\n        <td colspan=\"14\" class=\"colspaned\">\n          <table class=\"nested-table\">\n            <colgroup>\n              <col\n                class=\"{{ column.className }}\"\n                *ngFor=\"let column of columns\"\n              />\n            </colgroup>\n            <tr>\n              <td\n                [attr.data-label]=\"column.label\"\n                *ngFor=\"let column of columns\"\n                class=\"{{ column.className }}\"\n                [ngClass]=\"{\n                  'icon-td':\n                    column.type === 'img-text' || column.type === 'avatar',\n                  actions: column.type === 'action'\n                }\"\n              >\n                <ng-container *ngIf=\"column.type == 'linked'\">\n                  <a\n                    *ngIf=\"data[column.key].img\"\n                    (click)=\"actionClicked({data, action: 'linked-click'});$event.stopPropagation()\"\n                    class=\"link-icon\"\n                    ><img src=\"{{ data[column.key].img }}\" alt=\"Link\"\n                  /></a>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'normal'\">\n                  {{ data[column.key].value }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-with-date'\">\n                  {{ data[column.key].value }}\n                  <div>\n                    <small class=\"text-small grey-text\">{{\n                      data[column.key].badgeLabel\n                    }}</small>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'currency'\">\n                  {{ data[column.key].value | currency: column.currencyType }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'status'\">\n                  <span class=\"status {{ data[column.key].value }}\"></span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-progress'\">\n                  <div>\n                    <img\n                      *ngIf=\"data[column.key].img\"\n                      [src]=\"data[column.key].img\"\n                      alt=\"Flag\"\n                    />\n                    {{ data[column.key].label }}\n                  </div>\n                  <div class=\"progress-bar-lined\">\n                    <div\n                      class=\"progress-indication {{ data[column.key].status }}\"\n                      [ngStyle]=\"{ width: data[column.key].value }\"\n                    ></div>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'text-medium'\">\n                  <span class=\"text-medium\">{{ data[column.key].value }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-text'\">\n                  <div>\n                    <img\n                      src=\"{{ data[column.key].img }}\"\n                      alt=\"{{ column.label }}\"\n                    />\n                    {{ data[column.key].value }}\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'avatar'\">\n                  <div class=\"avatar {{ data[column.key].avatar }}\">\n                    <span>{{ data[column.key].value }}</span>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge'\">\n                  <label class=\"badge {{ data[column.key].value }}\">{{\n                    data[column.key].label\n                  }}</label>\n                  <img\n                    (click)=\"actionClicked({data, action: 'badge-img-click'});$event.stopPropagation()\"\n                    *ngIf=\"data[column.key].img\"\n                    class=\"mt2\"\n                    src=\"{{ data[column.key].img }}\"\n                    alt=\"{{ column.label }}\"\n                  />\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-label'\">\n                  <span class=\"badge mr2 {{ data[column.key].status }}\"\n                    >&nbsp;{{ data[column.key].badgeLabel }}</span\n                  >{{ data[column.key].value }}\n                </ng-container>\n                <div class=\"list-action\" *ngIf=\"column.type == 'action'\">\n                  <ng-container *ngFor=\"let action of actions; let i = index\">\n                    <button\n                      *ngIf=\"\n                        action.isButton && data[column.key][i] && action.img\n                      \"\n                      (click)=\"actionClicked({data, action: action.value});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      <img [src]=\"action.img\" />\n                    </button>\n                    <div\n                      id=\"{{ id }}\"\n                      class=\"customdropdown\"\n                      *ngIf=\"action.isDropdown && data['actionDropdownItems']\"\n                    >\n                      <a\n                        aria-haspopup=\"listbox\"\n                        aria-labelledby=\"dropdown-label\"\n                        (click)=\"toggleDropdown(id); $event.stopPropagation()\"\n                        (clickOutside)=\"dropdownOpen = false\"\n                      >\n                        <img [src]=\"action.img\" />\n                      </a>\n                      <ul\n                        class=\"dropdown-list\"\n                        role=\"listbox\"\n                        aria-expanded=\"false\"\n                        [ngClass]=\"{\n                          'dropdown-open': dropdownOpen && id == clickedRow\n                        }\"\n                      >\n                        <li\n                          *ngFor=\"let o of data['actionDropdownItems']\"\n                          tabindex=\"0\"\n                          (click)=\"actionClicked({data, action: o.value});$event.stopPropagation()\"\n                          role=\"option\"\n                          [innerHTML]=\"o.key\"\n                        ></li>\n                      </ul>\n                    </div>\n                    <button\n                      *ngIf=\"\n                        !action.img && data[column.key][i] && action.isButton\n                      \"\n                      (click)=\"actionClicked({data, action: action.value});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      {{ action.label }}\n                    </button>\n                  </ng-container>\n                </div>\n              </td>\n            </tr>\n            <tr class=\"expanded\" *ngFor=\"let order of data.linkedOrders\">\n              <td\n                [attr.data-label]=\"column.label\"\n                *ngFor=\"let column of columns\"\n                class=\"{{ column.className }}\"\n                [ngClass]=\"{\n                  'icon-td':\n                    column.type === 'img-text' || column.type === 'avatar',\n                  actions: column.type === 'action',\n                  linked: column.type === 'linked'\n                }\"\n              >\n                <ng-container *ngIf=\"column.type == 'linked'\">\n                  <span class=\"h-line\"></span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'normal'\">\n                  {{ order[column.key].value }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-with-date'\">\n                  {{ order[column.key].value }}\n                  <div>\n                    <small class=\"text-small grey-text\">{{\n                      order[column.key].badgeLabel\n                    }}</small>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'currency'\">\n                  {{ order[column.key].value | currency: column.currencyType }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'status'\">\n                  <!-- <span class=\"status {{ order[column.key].value }}\"></span> -->\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-progress'\">\n                  <div>\n                    <img\n                      *ngIf=\"order[column.key].img\"\n                      [src]=\"order[column.key].img\"\n                      alt=\"Flag\"\n                    />\n                    {{ order[column.key].label }}\n                  </div>\n                  <div class=\"progress-bar-lined\">\n                    <div\n                      class=\"progress-indication {{ order[column.key].status }}\"\n                      [ngStyle]=\"{ width: order[column.key].value }\"\n                    ></div>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'text-medium'\">\n                  <span class=\"text-medium\">{{ order[column.key].value }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-text'\">\n                  <div>\n                    <img\n                      src=\"{{ order[column.key].img }}\"\n                      alt=\"{{ column.label }}\"\n                    />\n                    {{ order[column.key].value }}\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'avatar'\">\n                  <div class=\"avatar {{ order[column.key].avatar }}\">\n                    <span>{{ order[column.key].value }}</span>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge'\">\n                  <label class=\"badge {{ order[column.key].value }}\">{{\n                    order[column.key].label\n                  }}</label>\n                  <img\n                    (click)=\"actionClicked({order, action: 'badge-img-click'});$event.stopPropagation()\"\n                    *ngIf=\"order[column.key].img\"\n                    class=\"mt2\"\n                    src=\"{{ order[column.key].img }}\"\n                    alt=\"{{ column.label }}\"\n                  />\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-label'\">\n                  <span class=\"badge mr2 {{ order[column.key].status }}\"\n                    >&nbsp;{{ order[column.key].badgeLabel }}</span\n                  >{{ order[column.key].value }}\n                </ng-container>\n                <div class=\"list-action\" *ngIf=\"column.type == 'action'\">\n                  <ng-container *ngFor=\"let action of actions; let i = index\">\n                    <button\n                      *ngIf=\"\n                        action.isButton && order[column.key][i] && action.img\n                      \"\n                      (click)=\"actionClicked({order, action: action.value+'-linked'});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      <img [src]=\"action.img\" />\n                    </button>\n                    <div\n                      id=\"{{ id }}\"\n                      class=\"customdropdown\"\n                      *ngIf=\"action.isDropdown && order['actionDropdownItems']\"\n                    >\n                      <a\n                        aria-haspopup=\"listbox\"\n                        aria-labelledby=\"dropdown-label\"\n                        (click)=\"toggleDropdown(id); $event.stopPropagation()\"\n                        (clickOutside)=\"dropdownOpen = false\"\n                      >\n                        <img [src]=\"action.img\" />\n                      </a>\n                      <ul\n                        class=\"dropdown-list\"\n                        role=\"listbox\"\n                        aria-expanded=\"false\"\n                        [ngClass]=\"{\n                          'dropdown-open': dropdownOpen && id == clickedRow\n                        }\"\n                      >\n                        <li\n                          *ngFor=\"let o of order['actionDropdownItems']\"\n                          tabindex=\"0\"\n                          (click)=\"actionClicked({order, action: o.value+'-linked'});$event.stopPropagation()\"\n                          role=\"option\"\n                          [innerHTML]=\"o.key\"\n                        ></li>\n                      </ul>\n                    </div>\n                    <button\n                      *ngIf=\"\n                        !action.img && order[column.key][i] && action.isButton\n                      \"\n                      (click)=\"actionClicked({order, action: action.value+'-linked'});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      {{ action.label }}\n                    </button>\n                  </ng-container>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: ClickOutsideDirective, selector: "[clickOutside]", outputs: ["clickOutside"] }, { kind: "pipe", type: i1.CurrencyPipe, name: "currency" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-table', template: "<table class=\"table {{ tableClass }}\" id=\"{{ tableId }}\">\n  <thead>\n    <tr>\n      <th colspan=\"14\" class=\"colspaned\">\n        <table class=\"nested-table\">\n          <colgroup>\n            <col\n              class=\"{{ column.className }}\"\n              *ngFor=\"let column of columns\"\n            />\n          </colgroup>\n          <tr>\n            <th\n              *ngFor=\"let column of columns\"\n              (click)=\"onSortColumn(column)\"\n              class=\"{{ column.className }}\"\n              [ngClass]=\"{\n                sort: column.sortable && sortable\n              }\"\n            >\n              <ng-container *ngIf=\"column.type != 'action'\">\n                {{ column.label }}\n                <img\n                  *ngIf=\"\n                    sort.column == column.key &&\n                    sort.direction == 1 &&\n                    column.sortable &&\n                    sortable\n                  \"\n                  src=\"./assets/icons/arrowdown.svg\"\n                  alt=\"asc\"\n                />\n                <img\n                  *ngIf=\"\n                    sort.column == column.key &&\n                    sort.direction == -1 &&\n                    column.sortable &&\n                    sortable\n                  \"\n                  src=\"./assets/icons/arrowup.svg\"\n                  alt=\"desc\"\n                />\n              </ng-container>\n              <ng-container *ngIf=\"column.type == 'action'\">\n                <button\n                  class=\"settings-btn\"\n                  *ngIf=\"column.label === '' && column.showGear\"\n                >\n                  <img src=\"./assets/icons/nav-bar/settings.svg\" />\n                </button>\n                <ng-container *ngIf=\"column.label !== ''\">{{\n                  column.label\n                }}</ng-container>\n              </ng-container>\n            </th>\n          </tr>\n        </table>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"no-data-row\" *ngIf=\"rows.length === 0 && !isLoading\">\n      <td colspan=\"13\">\n        <span class=\"text\">No records available!</span>\n      </td>\n    </tr>\n    <ng-container *ngIf=\"rows.length > 0\">\n      <tr\n        class=\"expandable\"\n        *ngFor=\"let data of rows; let id = index\"\n        (click)=\"onRowItemClick1(data)\"\n      >\n        <td colspan=\"14\" class=\"colspaned\">\n          <table class=\"nested-table\">\n            <colgroup>\n              <col\n                class=\"{{ column.className }}\"\n                *ngFor=\"let column of columns\"\n              />\n            </colgroup>\n            <tr>\n              <td\n                [attr.data-label]=\"column.label\"\n                *ngFor=\"let column of columns\"\n                class=\"{{ column.className }}\"\n                [ngClass]=\"{\n                  'icon-td':\n                    column.type === 'img-text' || column.type === 'avatar',\n                  actions: column.type === 'action'\n                }\"\n              >\n                <ng-container *ngIf=\"column.type == 'linked'\">\n                  <a\n                    *ngIf=\"data[column.key].img\"\n                    (click)=\"actionClicked({data, action: 'linked-click'});$event.stopPropagation()\"\n                    class=\"link-icon\"\n                    ><img src=\"{{ data[column.key].img }}\" alt=\"Link\"\n                  /></a>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'normal'\">\n                  {{ data[column.key].value }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-with-date'\">\n                  {{ data[column.key].value }}\n                  <div>\n                    <small class=\"text-small grey-text\">{{\n                      data[column.key].badgeLabel\n                    }}</small>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'currency'\">\n                  {{ data[column.key].value | currency: column.currencyType }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'status'\">\n                  <span class=\"status {{ data[column.key].value }}\"></span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-progress'\">\n                  <div>\n                    <img\n                      *ngIf=\"data[column.key].img\"\n                      [src]=\"data[column.key].img\"\n                      alt=\"Flag\"\n                    />\n                    {{ data[column.key].label }}\n                  </div>\n                  <div class=\"progress-bar-lined\">\n                    <div\n                      class=\"progress-indication {{ data[column.key].status }}\"\n                      [ngStyle]=\"{ width: data[column.key].value }\"\n                    ></div>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'text-medium'\">\n                  <span class=\"text-medium\">{{ data[column.key].value }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-text'\">\n                  <div>\n                    <img\n                      src=\"{{ data[column.key].img }}\"\n                      alt=\"{{ column.label }}\"\n                    />\n                    {{ data[column.key].value }}\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'avatar'\">\n                  <div class=\"avatar {{ data[column.key].avatar }}\">\n                    <span>{{ data[column.key].value }}</span>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge'\">\n                  <label class=\"badge {{ data[column.key].value }}\">{{\n                    data[column.key].label\n                  }}</label>\n                  <img\n                    (click)=\"actionClicked({data, action: 'badge-img-click'});$event.stopPropagation()\"\n                    *ngIf=\"data[column.key].img\"\n                    class=\"mt2\"\n                    src=\"{{ data[column.key].img }}\"\n                    alt=\"{{ column.label }}\"\n                  />\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-label'\">\n                  <span class=\"badge mr2 {{ data[column.key].status }}\"\n                    >&nbsp;{{ data[column.key].badgeLabel }}</span\n                  >{{ data[column.key].value }}\n                </ng-container>\n                <div class=\"list-action\" *ngIf=\"column.type == 'action'\">\n                  <ng-container *ngFor=\"let action of actions; let i = index\">\n                    <button\n                      *ngIf=\"\n                        action.isButton && data[column.key][i] && action.img\n                      \"\n                      (click)=\"actionClicked({data, action: action.value});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      <img [src]=\"action.img\" />\n                    </button>\n                    <div\n                      id=\"{{ id }}\"\n                      class=\"customdropdown\"\n                      *ngIf=\"action.isDropdown && data['actionDropdownItems']\"\n                    >\n                      <a\n                        aria-haspopup=\"listbox\"\n                        aria-labelledby=\"dropdown-label\"\n                        (click)=\"toggleDropdown(id); $event.stopPropagation()\"\n                        (clickOutside)=\"dropdownOpen = false\"\n                      >\n                        <img [src]=\"action.img\" />\n                      </a>\n                      <ul\n                        class=\"dropdown-list\"\n                        role=\"listbox\"\n                        aria-expanded=\"false\"\n                        [ngClass]=\"{\n                          'dropdown-open': dropdownOpen && id == clickedRow\n                        }\"\n                      >\n                        <li\n                          *ngFor=\"let o of data['actionDropdownItems']\"\n                          tabindex=\"0\"\n                          (click)=\"actionClicked({data, action: o.value});$event.stopPropagation()\"\n                          role=\"option\"\n                          [innerHTML]=\"o.key\"\n                        ></li>\n                      </ul>\n                    </div>\n                    <button\n                      *ngIf=\"\n                        !action.img && data[column.key][i] && action.isButton\n                      \"\n                      (click)=\"actionClicked({data, action: action.value});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      {{ action.label }}\n                    </button>\n                  </ng-container>\n                </div>\n              </td>\n            </tr>\n            <tr class=\"expanded\" *ngFor=\"let order of data.linkedOrders\">\n              <td\n                [attr.data-label]=\"column.label\"\n                *ngFor=\"let column of columns\"\n                class=\"{{ column.className }}\"\n                [ngClass]=\"{\n                  'icon-td':\n                    column.type === 'img-text' || column.type === 'avatar',\n                  actions: column.type === 'action',\n                  linked: column.type === 'linked'\n                }\"\n              >\n                <ng-container *ngIf=\"column.type == 'linked'\">\n                  <span class=\"h-line\"></span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'normal'\">\n                  {{ order[column.key].value }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-with-date'\">\n                  {{ order[column.key].value }}\n                  <div>\n                    <small class=\"text-small grey-text\">{{\n                      order[column.key].badgeLabel\n                    }}</small>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'currency'\">\n                  {{ order[column.key].value | currency: column.currencyType }}\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'status'\">\n                  <!-- <span class=\"status {{ order[column.key].value }}\"></span> -->\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-progress'\">\n                  <div>\n                    <img\n                      *ngIf=\"order[column.key].img\"\n                      [src]=\"order[column.key].img\"\n                      alt=\"Flag\"\n                    />\n                    {{ order[column.key].label }}\n                  </div>\n                  <div class=\"progress-bar-lined\">\n                    <div\n                      class=\"progress-indication {{ order[column.key].status }}\"\n                      [ngStyle]=\"{ width: order[column.key].value }\"\n                    ></div>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'text-medium'\">\n                  <span class=\"text-medium\">{{ order[column.key].value }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'img-text'\">\n                  <div>\n                    <img\n                      src=\"{{ order[column.key].img }}\"\n                      alt=\"{{ column.label }}\"\n                    />\n                    {{ order[column.key].value }}\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'avatar'\">\n                  <div class=\"avatar {{ order[column.key].avatar }}\">\n                    <span>{{ order[column.key].value }}</span>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge'\">\n                  <label class=\"badge {{ order[column.key].value }}\">{{\n                    order[column.key].label\n                  }}</label>\n                  <img\n                    (click)=\"actionClicked({order, action: 'badge-img-click'});$event.stopPropagation()\"\n                    *ngIf=\"order[column.key].img\"\n                    class=\"mt2\"\n                    src=\"{{ order[column.key].img }}\"\n                    alt=\"{{ column.label }}\"\n                  />\n                </ng-container>\n                <ng-container *ngIf=\"column.type == 'badge-label'\">\n                  <span class=\"badge mr2 {{ order[column.key].status }}\"\n                    >&nbsp;{{ order[column.key].badgeLabel }}</span\n                  >{{ order[column.key].value }}\n                </ng-container>\n                <div class=\"list-action\" *ngIf=\"column.type == 'action'\">\n                  <ng-container *ngFor=\"let action of actions; let i = index\">\n                    <button\n                      *ngIf=\"\n                        action.isButton && order[column.key][i] && action.img\n                      \"\n                      (click)=\"actionClicked({order, action: action.value+'-linked'});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      <img [src]=\"action.img\" />\n                    </button>\n                    <div\n                      id=\"{{ id }}\"\n                      class=\"customdropdown\"\n                      *ngIf=\"action.isDropdown && order['actionDropdownItems']\"\n                    >\n                      <a\n                        aria-haspopup=\"listbox\"\n                        aria-labelledby=\"dropdown-label\"\n                        (click)=\"toggleDropdown(id); $event.stopPropagation()\"\n                        (clickOutside)=\"dropdownOpen = false\"\n                      >\n                        <img [src]=\"action.img\" />\n                      </a>\n                      <ul\n                        class=\"dropdown-list\"\n                        role=\"listbox\"\n                        aria-expanded=\"false\"\n                        [ngClass]=\"{\n                          'dropdown-open': dropdownOpen && id == clickedRow\n                        }\"\n                      >\n                        <li\n                          *ngFor=\"let o of order['actionDropdownItems']\"\n                          tabindex=\"0\"\n                          (click)=\"actionClicked({order, action: o.value+'-linked'});$event.stopPropagation()\"\n                          role=\"option\"\n                          [innerHTML]=\"o.key\"\n                        ></li>\n                      </ul>\n                    </div>\n                    <button\n                      *ngIf=\"\n                        !action.img && order[column.key][i] && action.isButton\n                      \"\n                      (click)=\"actionClicked({order, action: action.value+'-linked'});$event.stopPropagation()\"\n                      class=\"{{ action.className }}\"\n                    >\n                      {{ action.label }}\n                    </button>\n                  </ng-container>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { sort: [{
                type: Input,
                args: ['sort']
            }], isLoading: [{
                type: Input,
                args: ['isLoading']
            }], customSortable: [{
                type: Input,
                args: ['customSortable']
            }], sortable: [{
                type: Input,
                args: ['sortable']
            }], columns: [{
                type: Input,
                args: ['columns']
            }], rows: [{
                type: Input,
                args: ['rows']
            }], actionDropdownItems: [{
                type: Input,
                args: ['actionDropdownItems']
            }], tableClass: [{
                type: Input,
                args: ['tableClass']
            }], tableId: [{
                type: Input,
                args: ['tableId']
            }], actions: [{
                type: Input,
                args: ['actions']
            }], customSort: [{
                type: Output,
                args: ['customSort']
            }], rowClick: [{
                type: Output,
                args: ['rowClick']
            }], currentValueChange: [{
                type: Output
            }], actionClick: [{
                type: Output,
                args: ['actionClick']
            }] } });

class DropdownExpandedComponent {
    constructor() { }
    ngOnInit() {
    }
}
DropdownExpandedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DropdownExpandedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropdownExpandedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DropdownExpandedComponent, selector: "cb-dropdown-expanded", ngImport: i0, template: "<p>dropdown-expanded works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DropdownExpandedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-dropdown-expanded', template: "<p>dropdown-expanded works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class DealsCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DealsCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DealsCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DealsCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DealsCardComponent, selector: "cb-deals-card", inputs: { card: "card" }, ngImport: i0, template: "<div class=\"list-card\">\n  <div class=\"header\">\n    <div class=\"d-flex justify-content-between mb2\">\n      <div class=\"title\">{{ card.title }}</div>\n      <div class=\"link\">\n        <a class=\"detaillink\">Full Details</a>\n      </div>\n    </div>\n    <label class=\"badge {{ card.status }}\">{{ card.status | titlecase }}</label>\n  </div>\n  <div class=\"line\"><span class=\"{{ card.status }}\"></span></div>\n  <div class=\"content\" *ngIf=\"!card.multi_location\">\n    <div class=\"locations\">\n      <div class=\"title\">Location</div>\n      <div class=\"details\">{{ card.address }}</div>\n    </div>\n    <div class=\"type_speed\">\n      <span class=\"type\">{{ card.category }}</span>\n      <img src=\"./assets/icons/speed/1g.svg\" />\n      <span class=\"speed\">{{ card.speed }}</span>\n    </div>\n    <div class=\"amount\">\n      <span class=\"title\">{{ card.amount }}</span>\n      <span class=\"mr2\">MRC&nbsp;{{ card.mrc }}</span>\n      <span>NRC&nbsp;{{ card.nrc }}</span>\n    </div>\n    <hr />\n    <ul class=\"highlites\">\n      <li>\n        <div class=\"icon-box\">\n          <img src=\"./assets/icons/star.svg\" />\n        </div>\n        <div class=\"content-box\">\n          <span>High Competition</span>\n          <a>{{ card.providers_count }} Providers</a>\n        </div>\n      </li>\n      <li>\n        <div class=\"icon-box\">\n          <img src=\"./assets/icons/badge.svg\" />\n        </div>\n        <div class=\"content-box\">\n          <span>Potential Nearby</span>\n          <a>{{ card.nearby_companies }} Companies nearby</a>\n        </div>\n      </li>\n      <li>\n        <div class=\"icon-box\">\n          <img src=\"./assets/icons/customer.svg\" />\n        </div>\n        <div class=\"content-box\">\n          <span>Customer</span>\n          <a>{{ card.customer }}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"content\" *ngIf=\"card.multi_location\">\n    <div class=\"locations\">\n      <div class=\"title\">{{ card.locations }} Locations</div>\n    </div>\n    <div class=\"amount\">\n      <span class=\"title\">{{ card.amount }}</span>\n    </div>\n    <div class=\"potential\">\n      <img src=\"./assets/icons/badge.svg\" />\n      <div class=\"detail\">\n        <label>Customer</label>\n        <a>{{ card.customer }}</a>\n      </div>\n    </div>\n    <ul class=\"highlites\">\n      <li>\n        <div class=\"content-box\">\n          <a>{{ card.providers_count }} Your Company can provide</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"actions\">\n    <button>\n      <svg\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M2.59037 13.4423L2.59044 13.4424C2.66665 13.5057 2.77314 13.5179 2.86182 13.4736L13.3618 8.22361C13.3618 8.22361 13.3618 8.22361 13.3618 8.22361C13.4465 8.18125 13.5 8.09468 13.5 8.00001C13.5 7.90532 13.4465 7.81879 13.3618 7.77642C13.3618 7.77642 13.3618 7.77642 13.3618 7.77642L2.86182 2.52643L2.86177 2.52641C2.7731 2.48206 2.66666 2.49433 2.59047 2.55759L2.59033 2.5577C2.51408 2.62096 2.48242 2.72334 2.50965 2.81861L2.50967 2.81869L3.58103 6.56863C3.61172 6.676 3.70986 6.75001 3.82148 6.75001L7.25002 6.75001C7.94039 6.75001 8.50002 7.30964 8.50002 8.00001C8.50002 8.69035 7.94039 9.25001 7.25002 9.25001H3.82148C3.70984 9.25001 3.61171 9.32401 3.58103 9.43137L2.50967 13.1813L2.50965 13.1814C2.48242 13.2766 2.51406 13.379 2.59037 13.4423Z\"\n          fill=\"#005EB8\"\n          stroke=\"#005EB8\"\n        />\n      </svg>\n    </button>\n    <button>\n      <svg\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M4.56667 7.80004C4.56667 7.22932 4.10404 6.7667 3.53334 6.7667C2.96263 6.7667 2.5 7.22932 2.5 7.80004C2.5 8.37073 2.96264 8.83337 3.53334 8.83337C4.10403 8.83337 4.56667 8.37073 4.56667 7.80004ZM9.16668 7.80004C9.16668 7.22932 8.70406 6.7667 8.13334 6.7667C7.56264 6.7667 7.10001 7.22932 7.10001 7.80004C7.10001 8.37073 7.56265 8.83337 8.13334 8.83337C8.70405 8.83337 9.16668 8.37074 9.16668 7.80004ZM13.7667 7.80004C13.7667 7.22932 13.3041 6.7667 12.7333 6.7667C12.1626 6.7667 11.7 7.22932 11.7 7.80004C11.7 8.37074 12.1626 8.83337 12.7333 8.83337C13.3041 8.83337 13.7667 8.37074 13.7667 7.80004Z\"\n          fill=\"#66757E\"\n          stroke=\"#66757E\"\n        />\n      </svg>\n    </button>\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.TitleCasePipe, name: "titlecase" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: DealsCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-deals-card', template: "<div class=\"list-card\">\n  <div class=\"header\">\n    <div class=\"d-flex justify-content-between mb2\">\n      <div class=\"title\">{{ card.title }}</div>\n      <div class=\"link\">\n        <a class=\"detaillink\">Full Details</a>\n      </div>\n    </div>\n    <label class=\"badge {{ card.status }}\">{{ card.status | titlecase }}</label>\n  </div>\n  <div class=\"line\"><span class=\"{{ card.status }}\"></span></div>\n  <div class=\"content\" *ngIf=\"!card.multi_location\">\n    <div class=\"locations\">\n      <div class=\"title\">Location</div>\n      <div class=\"details\">{{ card.address }}</div>\n    </div>\n    <div class=\"type_speed\">\n      <span class=\"type\">{{ card.category }}</span>\n      <img src=\"./assets/icons/speed/1g.svg\" />\n      <span class=\"speed\">{{ card.speed }}</span>\n    </div>\n    <div class=\"amount\">\n      <span class=\"title\">{{ card.amount }}</span>\n      <span class=\"mr2\">MRC&nbsp;{{ card.mrc }}</span>\n      <span>NRC&nbsp;{{ card.nrc }}</span>\n    </div>\n    <hr />\n    <ul class=\"highlites\">\n      <li>\n        <div class=\"icon-box\">\n          <img src=\"./assets/icons/star.svg\" />\n        </div>\n        <div class=\"content-box\">\n          <span>High Competition</span>\n          <a>{{ card.providers_count }} Providers</a>\n        </div>\n      </li>\n      <li>\n        <div class=\"icon-box\">\n          <img src=\"./assets/icons/badge.svg\" />\n        </div>\n        <div class=\"content-box\">\n          <span>Potential Nearby</span>\n          <a>{{ card.nearby_companies }} Companies nearby</a>\n        </div>\n      </li>\n      <li>\n        <div class=\"icon-box\">\n          <img src=\"./assets/icons/customer.svg\" />\n        </div>\n        <div class=\"content-box\">\n          <span>Customer</span>\n          <a>{{ card.customer }}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"content\" *ngIf=\"card.multi_location\">\n    <div class=\"locations\">\n      <div class=\"title\">{{ card.locations }} Locations</div>\n    </div>\n    <div class=\"amount\">\n      <span class=\"title\">{{ card.amount }}</span>\n    </div>\n    <div class=\"potential\">\n      <img src=\"./assets/icons/badge.svg\" />\n      <div class=\"detail\">\n        <label>Customer</label>\n        <a>{{ card.customer }}</a>\n      </div>\n    </div>\n    <ul class=\"highlites\">\n      <li>\n        <div class=\"content-box\">\n          <a>{{ card.providers_count }} Your Company can provide</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"actions\">\n    <button>\n      <svg\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M2.59037 13.4423L2.59044 13.4424C2.66665 13.5057 2.77314 13.5179 2.86182 13.4736L13.3618 8.22361C13.3618 8.22361 13.3618 8.22361 13.3618 8.22361C13.4465 8.18125 13.5 8.09468 13.5 8.00001C13.5 7.90532 13.4465 7.81879 13.3618 7.77642C13.3618 7.77642 13.3618 7.77642 13.3618 7.77642L2.86182 2.52643L2.86177 2.52641C2.7731 2.48206 2.66666 2.49433 2.59047 2.55759L2.59033 2.5577C2.51408 2.62096 2.48242 2.72334 2.50965 2.81861L2.50967 2.81869L3.58103 6.56863C3.61172 6.676 3.70986 6.75001 3.82148 6.75001L7.25002 6.75001C7.94039 6.75001 8.50002 7.30964 8.50002 8.00001C8.50002 8.69035 7.94039 9.25001 7.25002 9.25001H3.82148C3.70984 9.25001 3.61171 9.32401 3.58103 9.43137L2.50967 13.1813L2.50965 13.1814C2.48242 13.2766 2.51406 13.379 2.59037 13.4423Z\"\n          fill=\"#005EB8\"\n          stroke=\"#005EB8\"\n        />\n      </svg>\n    </button>\n    <button>\n      <svg\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M4.56667 7.80004C4.56667 7.22932 4.10404 6.7667 3.53334 6.7667C2.96263 6.7667 2.5 7.22932 2.5 7.80004C2.5 8.37073 2.96264 8.83337 3.53334 8.83337C4.10403 8.83337 4.56667 8.37073 4.56667 7.80004ZM9.16668 7.80004C9.16668 7.22932 8.70406 6.7667 8.13334 6.7667C7.56264 6.7667 7.10001 7.22932 7.10001 7.80004C7.10001 8.37073 7.56265 8.83337 8.13334 8.83337C8.70405 8.83337 9.16668 8.37074 9.16668 7.80004ZM13.7667 7.80004C13.7667 7.22932 13.3041 6.7667 12.7333 6.7667C12.1626 6.7667 11.7 7.22932 11.7 7.80004C11.7 8.37074 12.1626 8.83337 12.7333 8.83337C13.3041 8.83337 13.7667 8.37074 13.7667 7.80004Z\"\n          fill=\"#66757E\"\n          stroke=\"#66757E\"\n        />\n      </svg>\n    </button>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { card: [{
                type: Input,
                args: ['card']
            }] } });

class ProgressBarComponent {
    constructor() {
        this.date = '';
        this.percentage = '';
        this.statuses = [];
    }
}
ProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ProgressBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: ProgressBarComponent, selector: "cb-progress-bar", inputs: { date: "date", percentage: "percentage", statuses: "statuses" }, ngImport: i0, template: "<div class=\"progress-indicator mt8\">\n  <div class=\"item\">\n    <div class=\"percentage d-flex justify-content-start\">0%</div>\n    <div class=\"bar {{ statuses[0] ? statuses[0] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Sent</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage\"></div>\n    <div class=\"bar {{ statuses[1] ? statuses[1] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Acknowledged</span\n      ><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage d-flex justify-content-center flagtext\">\n      <img src=\"./assets/icons/flag2.svg\" alt=\"Flag\" width=\"20\" /><span>{{\n        date\n      }}</span>\n    </div>\n    <div class=\"bar {{ statuses[2] ? statuses[2] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">In Progress</span\n      ><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage\"></div>\n    <div class=\"bar {{ statuses[3] ? statuses[3] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Confirmed</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage\"></div>\n    <div class=\"bar {{ statuses[4] ? statuses[4] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Delivered</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage d-flex justify-content-end flaglate\">\n      <label class=\"checkbox-box mr3\"\n        >Flag as Late\n        <input type=\"checkbox\" />\n        <span class=\"checkmark\"></span> </label\n      >100%\n    </div>\n    <div class=\"bar {{ statuses[5] ? statuses[5] : '' }}\"></div>\n    <div class=\"status-text text-right\">\n      <span class=\"status\">Completed</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div\n    *ngIf=\"percentage != ''\"\n    class=\"circular-indicator\"\n    [style.left]=\"percentage\"\n  >\n    <span class=\"perc-value\">{{ percentage }}</span>\n    <span class=\"circle\"></span>\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cb-progress-bar', template: "<div class=\"progress-indicator mt8\">\n  <div class=\"item\">\n    <div class=\"percentage d-flex justify-content-start\">0%</div>\n    <div class=\"bar {{ statuses[0] ? statuses[0] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Sent</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage\"></div>\n    <div class=\"bar {{ statuses[1] ? statuses[1] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Acknowledged</span\n      ><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage d-flex justify-content-center flagtext\">\n      <img src=\"./assets/icons/flag2.svg\" alt=\"Flag\" width=\"20\" /><span>{{\n        date\n      }}</span>\n    </div>\n    <div class=\"bar {{ statuses[2] ? statuses[2] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">In Progress</span\n      ><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage\"></div>\n    <div class=\"bar {{ statuses[3] ? statuses[3] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Confirmed</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage\"></div>\n    <div class=\"bar {{ statuses[4] ? statuses[4] : '' }}\"></div>\n    <div class=\"status-text\">\n      <span class=\"status\">Delivered</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"percentage d-flex justify-content-end flaglate\">\n      <label class=\"checkbox-box mr3\"\n        >Flag as Late\n        <input type=\"checkbox\" />\n        <span class=\"checkmark\"></span> </label\n      >100%\n    </div>\n    <div class=\"bar {{ statuses[5] ? statuses[5] : '' }}\"></div>\n    <div class=\"status-text text-right\">\n      <span class=\"status\">Completed</span><span class=\"date\">{{ date }}</span>\n    </div>\n  </div>\n  <div\n    *ngIf=\"percentage != ''\"\n    class=\"circular-indicator\"\n    [style.left]=\"percentage\"\n  >\n    <span class=\"perc-value\">{{ percentage }}</span>\n    <span class=\"circle\"></span>\n  </div>\n</div>\n" }]
        }], propDecorators: { date: [{
                type: Input,
                args: ['date']
            }], percentage: [{
                type: Input,
                args: ['percentage']
            }], statuses: [{
                type: Input,
                args: ['statuses']
            }] } });

class DropdownStatusComponent {
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
DropdownStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: DropdownStatusComponent, selector: "cb-dropdown-status", inputs: { status: "status", statusClass: "statusClass", items: "items" }, outputs: { currentValueChange: "currentValueChange" }, host: { listeners: { "document:keydown": "handleKeyboardEvents($event)" } }, ngImport: i0, template: "<div class=\"customdropdown status-dropdown {{ statusClass }}\">\n  <div class=\"dropdown\" aria-haspopup=\"listbox\" aria-labelledby=\"dropdown-label\" (click)=\"toggleDropdown()\"\n    (clickOutside)=\"dropdownOpen = false\">\n    {{ status }}\n  </div>\n  <ul class=\"dropdown-list\" aria-expanded=\"false\" [ngClass]=\"{ 'dropdown-open': dropdownOpen }\">\n    <li *ngFor=\"let item of items\" (click)=\"select(item)\">{{ item }}\n    </li>\n  </ul>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: ClickOutsideDirective, selector: "[clickOutside]", outputs: ["clickOutside"] }] });
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

class PatternLibModule {
}
PatternLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PatternLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.1", ngImport: i0, type: PatternLibModule, declarations: [ClickOutsideDirective,
        PatternLibComponent,
        DatatableComponent,
        ButtonComponent,
        AvatarComponent,
        BadgeComponent,
        DropdownComponent,
        FormComponent,
        SearchInputComponent,
        SidebarComponent,
        StatusIndicatorComponent,
        StripComponent,
        TableComponent,
        DropdownExpandedComponent,
        DealsCardComponent,
        ProgressBarComponent,
        DropdownStatusComponent], imports: [CommonModule, BrowserModule, FormsModule, RouterModule], exports: [ClickOutsideDirective,
        PatternLibComponent,
        DatatableComponent,
        ButtonComponent,
        AvatarComponent,
        BadgeComponent,
        DropdownComponent,
        FormComponent,
        SearchInputComponent,
        SidebarComponent,
        StatusIndicatorComponent,
        StripComponent,
        TableComponent,
        DropdownExpandedComponent,
        DealsCardComponent,
        ProgressBarComponent,
        DropdownStatusComponent] });
PatternLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibModule, imports: [CommonModule, BrowserModule, FormsModule, RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: PatternLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ClickOutsideDirective,
                        PatternLibComponent,
                        DatatableComponent,
                        ButtonComponent,
                        AvatarComponent,
                        BadgeComponent,
                        DropdownComponent,
                        FormComponent,
                        SearchInputComponent,
                        SidebarComponent,
                        StatusIndicatorComponent,
                        StripComponent,
                        TableComponent,
                        DropdownExpandedComponent,
                        DealsCardComponent,
                        ProgressBarComponent,
                        DropdownStatusComponent,
                    ],
                    imports: [CommonModule, BrowserModule, FormsModule, RouterModule],
                    exports: [
                        ClickOutsideDirective,
                        PatternLibComponent,
                        DatatableComponent,
                        ButtonComponent,
                        AvatarComponent,
                        BadgeComponent,
                        DropdownComponent,
                        FormComponent,
                        SearchInputComponent,
                        SidebarComponent,
                        StatusIndicatorComponent,
                        StripComponent,
                        TableComponent,
                        DropdownExpandedComponent,
                        DealsCardComponent,
                        ProgressBarComponent,
                        DropdownStatusComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of pattern-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarComponent, BadgeComponent, ButtonComponent, ClickOutsideDirective, DatatableComponent, DealsCardComponent, DropdownComponent, DropdownExpandedComponent, DropdownStatusComponent, FormComponent, PatternLibComponent, PatternLibModule, PatternLibService, ProgressBarComponent, SearchInputComponent, SidebarComponent, StatusIndicatorComponent, StripComponent, TableComponent };
//# sourceMappingURL=connectbase-pattern-lib.mjs.map
