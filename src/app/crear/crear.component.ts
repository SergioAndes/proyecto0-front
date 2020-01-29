import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Globals} from "../../globals";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {Category} from "../category.model";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  private registerForm: FormGroup;
  private categories: Array<Category> = []
  category;

  constructor( public dialogRef: MatDialogRef<CrearComponent>, private authService: AuthService, public globals: Globals, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      nombre: new FormControl(),
      lugar: new FormControl(),
      direccion: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      presencial: new FormControl(),
      category: new FormControl(),
    });
    this.getCategories()
  }

    getCategories() {
    this.authService.getCategories().subscribe(data => {
      data.forEach(dataItem => {
        let category = new Category();
        category.id = dataItem.pk;
        category.nombre = dataItem.fields.nombre;
        this.categories.push(category);
      });

    },error => {
      console.log('Error -> ', error);

    });
  }

  createEvent() {
    let nombre = this.registerForm.get('nombre').value;
    let lugar = this.registerForm.get('lugar').value;
    let direccion = this.registerForm.get('direccion').value;
    let fechaInicio = this.registerForm.get('fechaInicio').value;
    let fechaFin = this.registerForm.get('fechaFin').value;
    let presencial = this.registerForm.get('presencial').value;
    let user = this.globals.token;
    let category =this.registerForm.get('category').value;
    console.log('category  ', this.category);

    if(presencial==null){
      presencial= false;
    }


    this.authService.createEvents(nombre, lugar, direccion, fechaInicio, fechaFin, presencial,this.category, user).subscribe(
      data => {
        console.log('eventos existoso ', data);
        this.dialogRef.close();
      },
      error => {
        console.log('Error -> ', error);
      });
  }
}
