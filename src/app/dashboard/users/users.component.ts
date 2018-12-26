import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RestaurentService } from 'src/app/core/service/restaurent.service';
import { StorageService } from 'src/app/core/service/storage.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  city: any;
  url: any;
  myForm: FormGroup;
  file: any;
  township: any = [];
  townships: any = [];
  constructor(private fb: FormBuilder, private rs: RestaurentService, private st: StorageService) { }

  ngOnInit() {
    this.city = JSON.parse(localStorage.getItem("datmon_city"));

    this.myForm = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      hotline: ['', [Validators.required]],
      idCity: ['', [Validators.required]],
      image: ['', []],
      pay: this.fb.array([]),
      payMin: ['', [Validators.required]],
      timeOpen: ['', [Validators.required]],
      township: this.fb.array([{ id: '', name: '' }]),
      transportFee: ['', [Validators.required]],
      transportTime: ['', [Validators.required]],
      email: ['', []],
      createAt: ['', []],
      address: ['', [Validators.required]],
    });
    this.loadData();
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

  onSubmit(data: any) {
    let self = this;
    if (this.file) {
      let name = this.uuidv4();
      this.st.uploadFile(this.file, name).then(file => {
        self.st.getUrl(name).subscribe(url => {
          data.image = url
          data.township = self.townships;
          self.rs.addNew(data)
            .then(s => alert("Cập nhật thành công"))
            .catch(err => alert("Cập nhật thất bại"));
        });
      }).catch(err => {
        alert(err);
      })
    }

    if (data && data.image) {
      data.township = this.townships;
      this.rs.updateData(data).then(data => {
        alert("cập nhật thành công");
      }).catch(err => {
        alert("cập nhật thất bại");
      })
    }
  }

  onChange(event) {
    console.log(event);

  }

  loadData() {
    let email = localStorage.getItem("datmon_email");
    const self = this;
    if (!email) return;
    this.rs.findByEmail(email).subscribe(data => {
      if (data) {

        let township = [];
        let city = this.city.filter(e => e.id == data.idCity);
        if (city && city.length) {
          township = city[0].townships;
        }
        self.township = township;
        self.myForm.patchValue({
          id: data.id,
          name: data.name,
          hotline: data.hotline,
          idCity: data.idCity,
          image: data.image,
          pay: data.pay,
          payMin: data.payMin,
          timeOpen: data.timeOpen,
          transportFee: data.transportFee,
          transportTime: data.transportTime,
          email: data.email,
          createAt: data.createAt,
          address: data.address,
        });
        this.url = data.image;
      }
    })
  }

  addTownship(id) {
    this.townships.push(id);
  }
}
