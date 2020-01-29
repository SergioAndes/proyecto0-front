import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnventosComponent } from './enventos/enventos.component';
import { RegistroComponent } from './registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Globals} from '../globals';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CrearComponent } from './crear/crear.component';
import { DetalleComponent } from './detalle/detalle.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnventosComponent,
    RegistroComponent,
    CrearComponent,
    DetalleComponent,
    EditarComponent
  ],
  entryComponents: [DetalleComponent, CrearComponent, EditarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    Globals,
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}} ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
