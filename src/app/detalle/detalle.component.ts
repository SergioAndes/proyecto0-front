import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Category} from "../category.model";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  presencial;
  categoria;

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { evento }) {
    dialogRef.disableClose = true; }

  ngOnInit() {
    this.getCategoryById()
    console.log('presencial',this.data.evento.presencial)
    if(this.data.evento.presencial == true){
      this.presencial ='Si'
    } else{this.presencial ='No'}

  }

  getCategoryById() {
    this.authService.getCategoriesById(this.data.evento.categoria).subscribe(data => {

      this.categoria = data.nombre;

    },error => {
      console.log('Error -> ', error);
    });
  }

   onNoClick(): void {
    this.dialogRef.close();
  }

}
