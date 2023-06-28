import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  constructor(private loginService: LoginService){

  }
  login(){
    console.log(this.loginForm.value.userName, this.loginForm.value.password);
    const userName: string = this.loginForm.value.userName || "";
    const password: string = this.loginForm.value.password || "";
    this.loginService.login(userName, password);
  }
}
