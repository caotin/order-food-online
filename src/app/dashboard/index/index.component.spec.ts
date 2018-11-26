import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDashboardComponent } from './index.component';

describe('IndexDashboardComponent', () => {
  let component: IndexDashboardComponent;
  let fixture: ComponentFixture<IndexDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
