import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  constructor() { }

  @Input('size') size: string = 'large';
  @Input('shape') shape: string = '';
  @Input('placeholder') placeholder: string = 'Type here...';
}
