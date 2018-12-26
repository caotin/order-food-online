import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {mergeMap, filter, map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private db: AngularFirestore) { }

  findAll(){
    return this.db.collection('city').valueChanges();
  }
}