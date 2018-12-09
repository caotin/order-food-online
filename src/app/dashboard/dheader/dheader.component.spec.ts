import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DheaderComponent } from './dheader.component';

describe('DheaderComponent', () => {
  let component: DheaderComponent;
  let fixture: ComponentFixture<DheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
