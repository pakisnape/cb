import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { KeyValue } from '../../models/key-value';

@Component({
  selector: 'cb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
      '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class DropdownComponent {

  @Input('type') type: string = 'normal';
  @Input('disabled') disabled: boolean = false;
  @Input('placeholder') placeholder: string = '';
  @Input('custom') custom: boolean = false;
  @Input('items') items: KeyValue[];
  @Output() currentValueChange = new EventEmitter();

  public currentValue: KeyValue;
  public dropdownOpen: boolean = false;
  public get dropdownElement(): Element {return this.elem.nativeElement.querySelector('.dropdown-list')}

  private currentIndex = -1;

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.currentValue = {key: this.placeholder, value: ''};
  }

  handleKeyboardEvents($event: KeyboardEvent) {
    if (this.dropdownOpen) {
      $event.preventDefault();
    } else {
      return;
    }
    if ($event.code === 'ArrowUp') {
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      } else if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
    } else if ($event.code === 'ArrowDown') {
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      } else if (this.currentIndex < this.items.length-1) {
        this.currentIndex++;
      }
      this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
    } else if (($event.code === 'Enter' || $event.code === 'NumpadEnter') && this.currentIndex >= 0) {
      this.selectByIndex(this.currentIndex);
    } else if ($event.code === 'Escape') {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.dropdownElement.setAttribute('aria-expanded', "false");
    this.currentIndex = -1;
    this.dropdownOpen = false;
  }

  selectByIndex(i: number) {
    let value = this.items[i];
    this.select(value);
  }

  select(value: any) {
    this.currentValue = value;
    this.closeDropdown();
    this.currentValueChange.emit(this.currentValue);
  }

  out() {
    debugger
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
  }
}
