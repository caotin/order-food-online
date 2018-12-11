import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  table = "food";
  constructor(private db: AngularFirestore) { }

  findAll() {
    return this.db.collection(this.table).valueChanges();
  }

  findByTownship(township: string) {
    return this.db.collection("restaurant", ref => ref.where("township", "array-contains", township).orderBy("createAt", "desc")).valueChanges();
  }

  findByIdRestaurant(id: string) {
    return this.db.collection(this.table, ref => ref.where("idRestaurant", "==", id)).valueChanges();
  }

  addNew(data){
    return this.db.collection(this.table).doc(data.id).set(data);
  }
  updateData(data){
    return this.db.collection(this.table).doc(data.id).update(data);
  }
  delete(id){
    return this.db.collection(this.table).doc(id).delete();
  }
}
