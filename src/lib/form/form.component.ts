import { Component, Input } from '@angular/core';
import { Form } from '../../models/form';

@Component({
  selector: 'cb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor() { }
  @Input('type') type: string = '';
  @Input('items') items: Form[];
  

}
