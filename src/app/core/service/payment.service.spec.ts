import { TestBed, inject } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

describe('PaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentService,AngularFirestore],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
  });

  it('should be created', inject([PaymentService], (service: PaymentService) => {
    expect(service).toBeTruthy();
  }));
});
