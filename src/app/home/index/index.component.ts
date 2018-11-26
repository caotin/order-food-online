import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadDialog(){
      var loginBox = document.getElementById('login-box');

      //cho hiện hộp đăng nhập trong 300ms
      $(loginBox).fadeIn("slow");
      let st=$('<div id="over" style="display: none; background-color: #000;position: fixed;left: 0;top: 0;width: 100%;height: 100%;opacity: 0.8;z-index: 999;"></div>');
      $('body').append(st);
      $('#over').fadeIn(300);
  }

  closeDialog(){
    $('#over, .login').fadeOut(300 , function() {
      $('#over').remove();  
    }); 
  }
}
