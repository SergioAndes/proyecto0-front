import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";
import {EnventosComponent} from "./enventos/enventos.component";
import {DetalleComponent} from "./detalle/detalle.component";

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: '', component: LoginComponent},
  {path: 'eventos', component: EnventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
