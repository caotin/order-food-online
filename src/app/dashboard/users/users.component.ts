import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurentService } from 'src/app/core/service/restaurent.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  city: any;
  url: any;
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private rs: RestaurentService) { }

  ngOnInit() {
    this.city = JSON.parse(localStorage.getItem("datmon_city"));

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      hotline: ['', [Validators.required]],
      idCity: ['', [Validators.required]],
      // image: ['', [Validators.required]],
      pay: this.fb.array([]),
      payMin: ['', [Validators.required]],
      timeOpen: ['', [Validators.required]],
      township: this.fb.array([]),
      transportFee: ['', [Validators.required]],
      transportTime: ['', [Validators.required]],
      email: ['', []],
      createAt: ['', []],
      address: ['', [Validators.required]],
    });
    setTimeout(()=>{
      this.loadData();
    },200)
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e) => { // called once readAsDataURL is completed
        this.url = (<FileReader>e.target).result;
      }
    }
  }

  onSubmit(data) {
    console.log(data);

  }

  loadData() {
    let email = localStorage.getItem("datmon_email");
    const self = this;
    this.rs.findByEmail(email).subscribe(data => {
      if (data) {
        let item: any = data[0];
        self.myForm.patchValue({
          name: item.name,
          hotline: item.hotline,
          idCity: item.idCity,
          // image: item.image,
          pay: item.pay,
          payMin: item.payMin,
          timeOpen: item.timeOpen,
          township: item.township,
          transportFee: item.transportFee,
          transportTime: item.transportTime,
          email: item.email,
          createAt: item.createAt,
          address: item.address,
        });
        this.url = item.image;
      }
    })
  }
}
