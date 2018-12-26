import { TestBed, inject } from '@angular/core/testing';

import { FoodService } from './food.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

describe('FoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodService, AngularFirestore],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
  });

  it('should be created', inject([FoodService], (service: FoodService) => {
    expect(service).toBeTruthy();
  }));

  it('Add food', inject([FoodService], (service: FoodService, done: DoneFn) => {
    service.addNew({ id: "123" }).then(data => done()).catch(err => console.log(err));
  }));

  it('Delete food', inject([FoodService], (service: FoodService, done: DoneFn) => {
    service.delete("123").then(data => done()).catch(err => console.log(err));
  }));

  it('Find food', inject([FoodService], (service: FoodService, done: DoneFn) => {
    service.findByTownship("haichau").subscribe(data => done());
  }));
});
