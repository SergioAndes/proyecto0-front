import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
          username: new FormControl(),
          password: new FormControl()
      });

  }

  register() {
    let user = this.registerForm.get('username').value;
    let pass = this.registerForm.get('password').value;
    this.authService.registerUser(user, pass).subscribe(data => {
      console.log('Registro exisoso ', data);
  }, error => {
        console.log('Error registrandose-> ', error);
      });
  }
}
