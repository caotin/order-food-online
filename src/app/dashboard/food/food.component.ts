import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/core/service/storage.service';
import { FoodService } from 'src/app/core/service/food.service';
import { Food, FoodBuilder } from './food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  data: any;
  myForm: FormGroup;
  idRestaurant = "";
  file: any;
  url: any;

  constructor(private fb: FormBuilder, private fd: FoodService, private st: StorageService) { }

  ngOnInit() {
    this.idRestaurant = localStorage.getItem("datmon_email");

    this.initForm();
    this.loadData();
  }

  initForm() {
    this.myForm = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idRestaurant: ['', []],
      image: ['', []],
      price: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      createAt: ['', []],
    });
    this.url = null;
  }

  loadData() {
    const self = this;
    this.fd.findByIdRestaurant(this.idRestaurant).subscribe(data => {
      if (data) {
        self.data = data;
      }
    })
  }

  onDelete(id) {
    const self = this;
    this.fd.delete(id).then(data => {
      alert("Xóa thành công");
      self.loadData()
    }).catch(err => {
      alert("Xóa thất bại");
    })
  }

  onSubmit(data) {
    let self = this;
    if (data && this.file) {

      let name = this.uuidv4();
      this.st.uploadFile(this.file, name).then(file => {
        self.st.getUrl(name).subscribe(url => {
          data.image = url
          data.id = self.uuidv4();
          data.createAt = new Date();
          data.idRestaurant = this.idRestaurant;
          let fo: Food = new FoodBuilder()
            .setId(data.id)
            .setCreateAt(data.createAt)
            .setIdRestaurant(data.idRestaurant)
            .setImage(data.image)
            .setPrice(data.price)
            .setName(data.name)
            .setDescription(data.description)
            .build();
          console.log(fo);

          self.fd.addNew(data)
            .then(s => { alert("Cập nhật thành công"); self.loadData(); self.initForm(); self.setDefaultValue() })
            .catch(err => { alert("Cập nhật thất bại"); self.loadData(); self.initForm(); });
        });
      }).catch(err => {
        alert(err);
      })
    } else if (data && data.id) {
      this.st.uploadFile(this.file, name).then(file => {
        self.st.getUrl(name).subscribe(url => {
          data.image = url
          self.fd.updateData(data).then(data => {
            alert("cập nhật thành công");
          }).catch(err => {
            alert("cập nhật thất bại");
          });
        });
      }).catch(err => {
        alert(err);
      })

    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.file = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (e) => { // called once readAsDataURL is completed
        this.url = (<FileReader>e.target).result;
      }
    }
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  setDefaultValue() {
    this.myForm.setValue({
      id: '',
      name: '',
      description: '',
      idRestaurant: '',
      image: '',
      price: '',
      createAt: '',
    });
    this.url = null;
  }
}
