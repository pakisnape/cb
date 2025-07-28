import { Component, Input, OnInit } from '@angular/core';
import { DealsCard } from '../../models/deals-card';

@Component({
  selector: 'cb-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss']
})
export class DealsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('card') card: DealsCard;
}
