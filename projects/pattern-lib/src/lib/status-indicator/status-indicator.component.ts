import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
})
export class StatusIndicatorComponent {
  constructor() {}

  @Input('type') type: string = 'pending';
}
