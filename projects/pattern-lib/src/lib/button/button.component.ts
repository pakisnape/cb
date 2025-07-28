import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor() { }

  @Input('icon') icon: boolean = false;
  @Input('btnLink') btnLink: string = '';
  @Input('img') img: string = '';
  @Input('className') className: string = '';
  @Input('size') size: 'small' | 'medium' | 'large' | '' = '';
  @Input('label') label: string = '';
  @Input('disabled') disabled: boolean = false;

}
