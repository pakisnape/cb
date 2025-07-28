import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent {
  @Input('className') className: string = '';
  constructor() { }
}
