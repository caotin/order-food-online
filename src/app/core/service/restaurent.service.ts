import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  table = "restaurant";
  private itemDoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) { }

  // findAll() {
  //   return this.db.collection(this.table).valueChanges();
  // }

  findById(id: string) {
    return this.db.collection(this.table, ref => ref.where("id", "==", id).orderBy("time","desc")).valueChanges();
  }
  findByEmail(email: string) {
    return this.db.collection(this.table, ref => ref.where("email", "==", email)).valueChanges();
  }
}
