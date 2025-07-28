import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownExpandedComponent } from './dropdown-expanded.component';

describe('DropdownExpandedComponent', () => {
  let component: DropdownExpandedComponent;
  let fixture: ComponentFixture<DropdownExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
