import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BadgeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGF0dGVybi1saWIvc3JjL2xpYi9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sY0FBYztJQUN6QjtRQUVTLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDbEIsVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUgzQixDQUFDOzsyR0FETCxjQUFjOytGQUFkLGNBQWMsMEZDUDNCLG1EQUErQzsyRkRPbEMsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxVQUFVOzBFQU9YLElBQUk7c0JBQVosS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NiLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3BlbmRpbmcnO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZyA9ICdQZW5kaW5nJztcbn1cbiIsIjxsYWJlbCBjbGFzcz1cImJhZGdlIHt7dHlwZX19XCI+e3tsYWJlbH19PC9sYWJlbD4iXX0=