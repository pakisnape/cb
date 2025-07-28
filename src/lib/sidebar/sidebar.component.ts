import { Component, Input } from '@angular/core';
import { Sidebar } from '../../models/sidebar';

@Component({
  selector: 'cb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor() { }

  @Input('items') items: Sidebar[];
  @Input('settingsLink') settingsLink: string;

}
