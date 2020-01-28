import { Component } from '@angular/core';
import {Globals} from '../globals';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoFrontend';

  constructor(public globals: Globals, private router: Router){}

  logout(){
    this.globals.setToken('0.0.0');
    this.router.navigate(['/']);
  }
}
