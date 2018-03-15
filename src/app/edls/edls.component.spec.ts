import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdlsComponent } from './edls.component';

describe('EdlsComponent', () => {
  let component: EdlsComponent;
  let fixture: ComponentFixture<EdlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
