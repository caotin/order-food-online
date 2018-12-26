import { TestBed, inject } from '@angular/core/testing';

import { RestaurentService } from './restaurent.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

describe('RestaurentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurentService, AngularFirestore],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
  });

  it('should be created', inject([RestaurentService], (service: RestaurentService) => {
    expect(service).toBeTruthy();
  }));
});
