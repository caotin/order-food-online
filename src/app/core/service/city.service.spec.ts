import { TestBed, inject } from '@angular/core/testing';

import { CityService } from './city.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityService, AngularFirestore],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
  });

  it('should be created', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));


});
