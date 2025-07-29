import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class ButtonComponent {
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
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: ButtonComponent, selector: "cb-button", inputs: { icon: "icon", btnLink: "btnLink", img: "img", className: "className", size: "size", label: "label", disabled: "disabled" }, ngImport: i0, template: "<button\n  *ngIf=\"btnLink != ''\"\n  class=\"{{ className }} {{ size }}\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\n  [routerLink]=\"btnLink\"\n>\n  <ng-container *ngIf=\"!icon\">{{ label }}</ng-container>\n  <ng-container *ngIf=\"icon\"><img src=\"{{ img }}\" alt=\"button\" /></ng-container>\n</button>\n\n<button\n  *ngIf=\"btnLink == ''\"\n  class=\"{{ className }} {{ size }}\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\n>\n  <ng-container *ngIf=\"!icon\">{{ label }}</ng-container>\n  <ng-container *ngIf=\"icon\"><img src=\"{{ img }}\" alt=\"button\" /></ng-container>\n</button>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhdHRlcm4tbGliL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPakQsTUFBTSxPQUFPLGVBQWU7SUFFMUI7UUFFZSxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDekIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFzQyxFQUFFLENBQUM7UUFDNUMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVksS0FBSyxDQUFDO0lBUjdCLENBQUM7OzRHQUZOLGVBQWU7Z0dBQWYsZUFBZSx1TENQNUIsb21CQWtCQTsyRkRYYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFdBQVc7MEVBUU4sSUFBSTtzQkFBbEIsS0FBSzt1QkFBQyxNQUFNO2dCQUNLLE9BQU87c0JBQXhCLEtBQUs7dUJBQUMsU0FBUztnQkFDRixHQUFHO3NCQUFoQixLQUFLO3VCQUFDLEtBQUs7Z0JBQ1EsU0FBUztzQkFBNUIsS0FBSzt1QkFBQyxXQUFXO2dCQUNILElBQUk7c0JBQWxCLEtBQUs7dUJBQUMsTUFBTTtnQkFDRyxLQUFLO3NCQUFwQixLQUFLO3VCQUFDLE9BQU87Z0JBQ0ssUUFBUTtzQkFBMUIsS0FBSzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgnaWNvbicpIGljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdidG5MaW5rJykgYnRuTGluazogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnaW1nJykgaW1nOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdjbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoJ3NpemUnKSBzaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnIHwgJycgPSAnJztcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbn1cbiIsIjxidXR0b25cbiAgKm5nSWY9XCJidG5MaW5rICE9ICcnXCJcbiAgY2xhc3M9XCJ7eyBjbGFzc05hbWUgfX0ge3sgc2l6ZSB9fVwiXG4gIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IG51bGxcIlxuICBbcm91dGVyTGlua109XCJidG5MaW5rXCJcbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpY29uXCI+e3sgbGFiZWwgfX08L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImljb25cIj48aW1nIHNyYz1cInt7IGltZyB9fVwiIGFsdD1cImJ1dHRvblwiIC8+PC9uZy1jb250YWluZXI+XG48L2J1dHRvbj5cblxuPGJ1dHRvblxuICAqbmdJZj1cImJ0bkxpbmsgPT0gJydcIlxuICBjbGFzcz1cInt7IGNsYXNzTmFtZSB9fSB7eyBzaXplIH19XCJcbiAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogbnVsbFwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaWNvblwiPnt7IGxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpY29uXCI+PGltZyBzcmM9XCJ7eyBpbWcgfX1cIiBhbHQ9XCJidXR0b25cIiAvPjwvbmctY29udGFpbmVyPlxuPC9idXR0b24+XG4iXX0=