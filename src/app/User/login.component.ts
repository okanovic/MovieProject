import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../Services';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles:[`em{float:right;color:red}`]
})
export class LoginComponent implements OnInit {
  username;
  password;
  mouseoverLogin;
  constructor(@Inject(AuthService) private authService:AuthService, @Inject(Router) private router:Router) { }

  ngOnInit() {
  }
  login(formValues) { 
    this.authService.loginUser(formValues.username,formValues.password)
    this.router.navigate(['/movies'])
    console.log('form values: ',formValues)
  }
  cancel(){
    this.router.navigate(['/movies'])
  }
}
