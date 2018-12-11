import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  table = "payment";
  constructor(private db: AngularFirestore) { }

  findByIdRestaurant(id: string) {
    return this.db.collection(this.table, ref => ref.where("idRestaurant", "==", id)).valueChanges();
  }

  addNew(data){
    return this.db.collection(this.table).doc(data.id).set(data);
  }
  update(data){
    return this.db.collection(this.table).doc(data.id).update(data);
  }
}
