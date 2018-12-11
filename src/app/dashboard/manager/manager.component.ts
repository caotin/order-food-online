import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/core/service/payment.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  data = [];
  view: any;
  constructor(private ps: PaymentService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let id = localStorage.getItem("datmon_email");
    this.ps.findByIdRestaurant(id).subscribe(data => {
      if (data) {
        this.data = data;
      }
    })
  }

  sum(listItem) {
    let sum = 0;
    if (listItem && listItem.length) {

      for (let i = 0; i < listItem.length; i++) {
        sum += listItem[i].number * listItem[i].price
      }
    }
    return sum;
  }

  onView(item) {
    this.view = item;
  }

  onChangeBill() {
    if (this.view) {
      this.view.status = true;
      this.ps.update(this.view).then(a=>{
        alert("Đã xác nhận");
      }).catch(er=>{
        alert("Xác nhận thất bại");
      });
    }
  }
}
