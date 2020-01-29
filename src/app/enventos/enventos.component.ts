import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import {Globals} from "../../globals";
import {AuthService} from "../auth.service";
import {Evento} from "../evento.model";
import {DetalleComponent} from "../detalle/detalle.component";
import {MatDialog} from "@angular/material";
import {CrearComponent} from "../crear/crear.component";
import {EditarComponent} from "../editar/editar.component";
import {error} from "util";
import {Category} from "../category.model";

@Component({
  selector: 'app-enventos',
  templateUrl: './enventos.component.html',
  styleUrls: ['./enventos.component.css']
})

export class EnventosComponent implements OnInit {

  constructor(private authService: AuthService, public globals: Globals, public dialog: MatDialog) { }
  private eventos: Array<Evento> = []




  ngOnInit() {
    console.log("TPKOM",this.globals.token)

    this.getEventos();
  }

  openDetalle(event: any): void {
    const dialogRef = this.dialog.open(DetalleComponent, {
      width: '70%',
      data: {
        evento: event
      }
    });
  }

   openCrearEvento(): void {
    const dialogRef = this.dialog.open(CrearComponent, {
      width: '70%',
    });
    dialogRef.afterClosed().subscribe(result => {
       this.eventos = [];
       this.getEventos();
    });
  }

    openEditEvent(event): void {
    const dialogRef = this.dialog.open(EditarComponent, {
      width: '70%',
      data: {
        evento: event
      }
    });
    dialogRef.afterClosed().subscribe(result => {
       this.eventos = [];
       this.getEventos();
    });
  }

  deleteEvent(event: any) {
    let id = event.id;
    this.authService.deleteEvent(id).subscribe(data => {
      this.eventos = [];
      this.getEventos();
    }, error => {

    });

  }


  getEventos() {
    this.authService.getEventsXUser(this.globals.token).subscribe(data => {
      console.log('eventos existoso ', data);
      data.forEach(dataItem => {
        let evento = new Evento();
        evento.id = dataItem.pk;
        evento.nombre = dataItem.fields.nombre;
        evento.categoria = dataItem.fields.categoria;
        evento.usuario = dataItem.fields.usuario;
        evento.direccion = dataItem.fields.direccion;
        evento.fechaInicio = dataItem.fields.fechaInicio;
        evento.fechaFin = dataItem.fields.fechaFin;
        evento.lugar = dataItem.fields.lugar;
        evento.presencial = dataItem.fields.presencial;
        this.eventos.push(evento);
      });
      }, error => {
      console.log('Error -> ', error);
    });
  }

}
