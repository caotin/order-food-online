import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CityService } from 'src/app/core/service/city.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
