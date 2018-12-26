import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/core/service/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  data: any;
  city: string = "0";
  townships: any;
  township = "0";
  constructor(private cityService: CityService, private router: Router) {

  }

  ngOnInit() {
    this.cityService.findAll().subscribe(data => {
      if (data) {
        this.data = data;
        localStorage.setItem("datmon_city", JSON.stringify(data));
        console.log(data);
        
      }
    })

  }

  loadFood(event) {
    this.township = event;
  }

  loadTownship(event) {
    if (event == "0") {
      this.township = "0";
      this.townships = [];
    }
    if (this.data && this.data.length) {
      this.data.forEach(item => {
        if (item.id == event) {
          this.townships = item.townships;
        }
      });
    }

  }

  onSubmit() {
    if (this.city != "0" && this.township != "0" && this.city != null && this.township != null) {
      this.router.navigate(['/search', this.city, this.township]);
    }
  }

  loadDialog() {
    var loginBox = document.getElementById('login-box');

    //cho hiện hộp đăng nhập trong 300ms
    $(loginBox).fadeIn("slow");
    let st = $('<div id="over" style="display: none; background-color: #000;position: fixed;left: 0;top: 0;width: 100%;height: 100%;opacity: 0.8;z-index: 999;"></div>');
    $('body').append(st);
    $('#over').fadeIn(300);
  }

  closeDialog() {
    $('#over, .login').fadeOut(300, function () {
      $('#over').remove();
    });
  }
}
