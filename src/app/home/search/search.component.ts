import { Component, OnInit } from '@angular/core';
import { RestaurentService } from 'src/app/core/service/restaurent.service';
import { FoodService } from 'src/app/core/service/food.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: any;
  constructor(private rs: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {
    const self = this;

    this.route.params.subscribe(paramsId => {
      if(paramsId['township']){
        let township = paramsId['township'];
        this.rs.findByTownship(township).subscribe(data => {
          self.data = data;
        });
      }
    });
  }

}
