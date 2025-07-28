import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatternLibComponent } from './pattern-lib.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormComponent } from './form/form.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { StripComponent } from './strip/strip.component';
import { TableComponent } from './table/table.component';
import { DropdownExpandedComponent } from './dropdown-expanded/dropdown-expanded.component';
import { FormsModule } from '@angular/forms';
import { DealsCardComponent } from './deals-card/deals-card.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DropdownStatusComponent } from './dropdown-status/dropdown-status.component';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    PatternLibComponent,
    DatatableComponent,
    ButtonComponent,
    AvatarComponent,
    BadgeComponent,
    DropdownComponent,
    FormComponent,
    SearchInputComponent,
    SidebarComponent,
    StatusIndicatorComponent,
    StripComponent,
    TableComponent,
    DropdownExpandedComponent,
    DealsCardComponent,
    ProgressBarComponent,
    DropdownStatusComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule],
  exports: [
    ClickOutsideDirective,
    PatternLibComponent,
    DatatableComponent,
    ButtonComponent,
    AvatarComponent,
    BadgeComponent,
    DropdownComponent,
    FormComponent,
    SearchInputComponent,
    SidebarComponent,
    StatusIndicatorComponent,
    StripComponent,
    TableComponent,
    DropdownExpandedComponent,
    DealsCardComponent,
    ProgressBarComponent,
    DropdownStatusComponent,
  ],
})
export class PatternLibModule { }
