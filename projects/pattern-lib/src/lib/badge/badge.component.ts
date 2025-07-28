import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  constructor() {}

  @Input() type: string = 'pending';
  @Input('label') label: string = 'Pending';
}
