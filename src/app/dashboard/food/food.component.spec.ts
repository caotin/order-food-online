import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComponent } from './food.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FoodService } from 'src/app/core/service/food.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { StorageService } from 'src/app/core/service/storage.service';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FoodComponent,],
      imports: [
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebase),

      ],
      providers: [
        FoodService,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
