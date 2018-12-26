import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedComponent } from './core/shared/shared.component';
import { NothingComponent } from './nothing/nothing.component';
import { PageErrorComponent } from './page-error/page-error.component';
import {
  RouterTestingModule
} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SharedComponent,
        NothingComponent,
        PageErrorComponent
      ],
      imports:[
        RouterTestingModule 
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
