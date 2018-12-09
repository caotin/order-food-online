import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private db: AngularFirestore) { }

  findAll() {
    return this.db.collection('food').valueChanges();
  }

  findByTownship(township: string) {
    return this.db.collection("restaurant", ref => ref.where("township", "array-contains", township).orderBy("createAt", "desc")).valueChanges();
  }

  findByIdRestaurant(id: string) {
    return this.db.collection("food", ref => ref.where("idRestaurant", "==", id)).valueChanges();
  }


}
