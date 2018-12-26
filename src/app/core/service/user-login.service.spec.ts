import { TestBed, inject } from '@angular/core/testing';

import { UserLoginService } from './user-login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

describe('UserLoginService', () => {
  let service: UserLoginService;
  const email: string = 'caotin15cntt@gmail.com';
  const password: string = '123123';

  const authStub: any = {
    authState: {},
    auth: {
      signInWithEmailAndPassword() {
        return Promise.resolve();
      }
    }
  };
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        UserLoginService,
        AngularFireAuth,
        { provide: AngularFireAuth, useValue: authStub },
        { provide: AngularFirestore },
      ],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
    authStub.authState = of(null);
  });
  it('should be created', inject([UserLoginService], (service: UserLoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should call signInWithPasswordAndEmail', inject([UserLoginService], (service: UserLoginService) => {
    const mock = TestBed.get(AngularFireAuth);
    const spy = spyOn(authStub.auth, 'signInWithEmailAndPassword').and.callThrough();
    mock.auth = authStub.auth;

    service.login(email, password);

    expect(spy).toHaveBeenCalledWith(email, password);
  }));
});
