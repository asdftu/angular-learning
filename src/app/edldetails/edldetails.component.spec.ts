import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdldetailsComponent } from './edldetails.component';

describe('EdldetailsComponent', () => {
  let component: EdldetailsComponent;
  let fixture: ComponentFixture<EdldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
