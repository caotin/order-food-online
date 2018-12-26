import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  table = "restaurant";
  private itemDoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) {
  }

  findById(id: string) {
    return this.db.collection(this.table).doc(id).valueChanges();
  }

  findByEmail(email: string): any {
    return this.db.collection(this.table).doc(email).valueChanges();
  }

  addNew(data) {
    let email = localStorage.getItem("datmon_email");
    data.email = email;
    data.createAt = new Date();
    return this.db.collection(this.table).doc(email).set(data);
  }

  updateData(data) {

    return this.db.doc(this.table + "/" + data.email).update(data);
  }
}
