import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Globals} from "../../globals";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { evento },
    private authService: AuthService, public globals: Globals, private router: Router) {
     dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      nombre: new FormControl(),
      lugar: new FormControl(),
      direccion: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      presencial: new FormControl(),
    });
  }
    updateEvent() {
    let nombre = this.registerForm.get('nombre').value;
    let lugar = this.registerForm.get('lugar').value;
    let direccion = this.registerForm.get('direccion').value;
    let fechaInicio = this.registerForm.get('fechaInicio').value;
    let fechaFin = this.registerForm.get('fechaFin').value;
    let presencial = this.registerForm.get('presencial').value;
    let idEvent = this.data.evento.id;
    console.log('nombre ', nombre);
    this.authService.updateEvent(idEvent, nombre, lugar, direccion, fechaInicio, fechaFin, presencial).subscribe(
      data => {
        console.log('eventos existoso ', data);
        this.dialogRef.close();
      },
      error => {
        console.log('Error -> ', error);
      });
  }

}
