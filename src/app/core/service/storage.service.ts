import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file,name) {
    if (file) {
      return this.storage.upload(name,file);
    }
  }

  getUrl(fileName){
    return this.storage.ref(fileName).getDownloadURL();
  }
  

}
