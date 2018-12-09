import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/core/service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private fb: FormBuilder, private userLogin: UserLoginService, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.pattern('/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;')]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(event) {
    if (event && event.email && event.password) {
      this.userLogin.login(event.email, event.password).subscribe(
        () => { this.router.navigate(['/dashboard']); localStorage.setItem("datmon_email", event.email) },
        alert
      );
    }
  }
}
