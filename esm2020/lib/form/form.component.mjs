import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2Zvcm0vZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWpELE1BQU0sT0FBTyxhQUFhO0lBRXhCO1FBQ2UsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQURqQixDQUFDOzswR0FGTixhQUFhOzhGQUFiLGFBQWEseUZDUjFCLGtRQU1BOzJGREVhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsU0FBUzswRUFPSixJQUFJO3NCQUFsQixLQUFLO3VCQUFDLE1BQU07Z0JBQ0csS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2ItZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoJ2l0ZW1zJykgaXRlbXM6IEZvcm1bXTtcbiAgXG5cbn1cbiIsIjxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJ7e3R5cGV9fS1ib3hcIj57e2l0ZW0ubGFiZWx9fVxuICAgICAgICA8aW5wdXQgdHlwZT1cInt7dHlwZX19XCIgW2F0dHIuY2hlY2tlZF09XCJ0eXBlID09ICdjaGVja2JveCdcIiBbYXR0ci5uYW1lXT1cInR5cGUgPT0gJ3JhZGlvJ1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG4iXX0=