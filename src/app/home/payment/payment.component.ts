import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/core/service/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  data: any;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: PaymentService, private router: Router) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("datmon_pay"));
    this.myForm = this.fb.group({
      address: ['', [Validators.required]],
      township: [''],
      home: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      timeSend: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createAt: [''],
      idRestaurant: [''],
      id: [''],
      data: this.fb.array([]),
      status: [''],
    });
  }

  sendData(event) {
    event.data = this.data.data;
    event.createAt = new Date();
    event.idRestaurant = this.data.idRestaurant;
    event.status = false;
    event.id = this.uuidv4();
    this.ps.addNew(event).then(d => {
      alert("Gửi đơn hàng thành công");
      this.router.navigate(['/']);
    }).catch(e => {
      alert("gửi đơn hàng thất bại")
    });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
