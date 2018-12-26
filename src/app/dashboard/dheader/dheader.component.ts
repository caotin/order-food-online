import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dheader',
  templateUrl: './dheader.component.html',
  styleUrls: ['./dheader.component.css']
})
export class DheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogout(){
    localStorage.removeItem("datmon_email");
    this.router.navigate(['/login']);
    
  }
}
