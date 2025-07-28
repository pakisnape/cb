import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input('date') date: string = '';
  @Input('percentage') percentage: string = '';
  @Input('statuses') statuses: any = [];
}
