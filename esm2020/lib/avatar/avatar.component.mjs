import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AvatarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhdHRlcm4tbGliL3NyYy9saWIvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2pELE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBSFMsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUNmLFVBQUssR0FBVyxJQUFJLENBQUM7SUFFdEIsQ0FBQzs7NEdBSkwsZUFBZTtnR0FBZixlQUFlLDJGQ1A1Qiw2REFBeUQ7MkZETzVDLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsV0FBVzswRUFLWixJQUFJO3NCQUFaLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYi1hdmF0YXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXZhdGFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdnb2xkJztcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBzdHJpbmcgPSAnSlAnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJhdmF0YXIge3t0eXBlfX1cIj48c3Bhbj57e2xhYmVsfX08L3NwYW4+PC9kaXY+Il19