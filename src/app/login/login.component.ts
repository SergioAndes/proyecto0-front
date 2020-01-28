import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';
import {Globals} from "../../globals";
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(private authService: AuthService, public globals: Globals, private router: Router) { }

  ngOnInit() {
        this.registerForm = new FormGroup({
          username: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
          password: new FormControl()
      });
  }
   get primEmail(){
    return this.registerForm.get('username');
  }

  login() {
    let user = this.registerForm.get('username').value;
    let pass = this.registerForm.get('password').value;
    this.authService.loginUser(user, pass).subscribe(data => {
      console.log('ingreso exisoso ', data)
      this.globals.setToken(data.token);
      this.router.navigate(['/eventos']);
      }, error => {
      this.globals.setToken('0.0.0');
      console.log('Error registrandose-> ', error);
    });
  }


}
