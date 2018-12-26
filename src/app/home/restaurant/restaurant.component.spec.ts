import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantComponent } from './restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RestaurentService } from 'src/app/core/service/restaurent.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FoodService } from 'src/app/core/service/food.service';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantComponent],
      imports: [
        RouterTestingModule,
        RouterModule,
        ReactiveFormsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        RestaurentService,
        FoodService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
