import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfooterComponent } from './dfooter.component';

describe('DfooterComponent', () => {
  let component: DfooterComponent;
  let fixture: ComponentFixture<DfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
