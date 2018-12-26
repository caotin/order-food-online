import { Component, OnInit } from '@angular/core';
import { RestaurentService } from 'src/app/core/service/restaurent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/core/service/food.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  checkImage: boolean = true;
  checkImageR: boolean = true;
  food: any;
  restaurant: any;
  city: any;
  area: any;
  listItem: Array<any> = [];
  idRestaurant: any;
  constructor(private rs: RestaurentService, private route: ActivatedRoute, private fs: FoodService, private router: Router) { }

  ngOnInit() {
    const self = this;
    this.city = JSON.parse(localStorage.getItem("datmon_city"));

    this.route.params.subscribe(paramsId => {
      if (paramsId && paramsId['id']) {
        let id = paramsId['id'];
        if (id) {
          console.log("abc", id);

          this.idRestaurant = paramsId['id'];
          this.rs.findById(id).subscribe(data => {
            if (data && this.city) {
              self.restaurant = data;
              self.area = self.city.filter(value => {
                return value.id == self.restaurant.idCity;
              })
              // self.loadCity(self.restaurant.township);
              self.area = self.loadCity(self.restaurant.township);

            }
          });
          this.fs.findByIdRestaurant(id).subscribe(data => {
            if (data) {
              self.food = data;
            }
          });
        }

      }
    });
  }

  loadCity(township) {
    const self = this;
    if (self.area && township && township.length) {
      let area = self.area[0];
      console.log("area", area);

      return area.townships.map(item => {
        let t = township.filter(i => {
          return i == item.id;
        })
        if (t && t.length)
          return { name: item.name, city: area.name };
      }).filter(f => {
        return f;
      })
    }
    return [];
  }

  onAddItem(item) {
    let self = this;
    console.log(item);

    if (item) {
      if (this.check(item)) {
        this.listItem = this.listItem.map(e => {
          if (e.id == item.id) {
            let number = Number.parseInt(e.number);
            number++;
            return { id: item.id, name: item.name, price: item.price, number: number }
          }
          return e;
        })
      }
      else {
        this.listItem.push({ id: item.id, name: item.name, price: item.price, number: 1 });

      }
      console.log(this.listItem);

    }
  }
  check(item) {
    let f = this.listItem.filter(e => {
      return e.id == item.id;
    })
    return f.length;
  }

  sum() {
    let sum = 0;
    if (this.listItem.length) {

      for (let i = 0; i < this.listItem.length; i++) {
        sum += this.listItem[i].number * this.listItem[i].price
      }
    }
    return sum;
  }

  sendData() {
    console.log({ data: this.listItem, idRestaurant: this.idRestaurant, township: this.restaurant.township });

    localStorage.setItem("datmon_pay", JSON.stringify({ data: this.listItem, idRestaurant: this.idRestaurant, township: this.restaurant.township }));
    this.router.navigate(['/payment'])
  }
}
