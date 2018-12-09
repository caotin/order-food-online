import { Component, OnInit } from '@angular/core';
import { RestaurentService } from 'src/app/core/service/restaurent.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private rs: RestaurentService, private route: ActivatedRoute, private fs: FoodService) { }

  ngOnInit() {
    const self = this;
    this.city = JSON.parse(localStorage.getItem("datmon_city"));

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        let id = paramsId['id'];
        this.rs.findById(id).subscribe(data => {
          if (data && data.length && this.city) {
            self.restaurant = data[0];
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
    });
  }

  loadCity(township) {
    const self = this;
    if (self.area && township && township.length) {
      let area = self.area[0];
      console.log("area",area);
      
      return area.townships.map(item => {
        let t = township.filter(i => {
          return i == item.id;
        })
        if (t && t.length)
          return { name: item.name, city: area.name };
      }).filter(f=>{
        return f;
      })
    }
    return [];
  }


}
