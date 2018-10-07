import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroParqueoComponent } from './registroparqueo/registroparqueo.component';
import { RegistrosparqueoComponent } from './registrosparqueo/registrosparqueo.component';


const routes: Routes =[
  {path:'',redirectTo:'/registrosparqueo',pathMatch:'full'},
  {path:'registrosparqueo',component:RegistrosparqueoComponent},
  {path:'registroparqueo',component:RegistroParqueoComponent},
  {path:'registroparqueo/:placa',component:RegistroParqueoComponent},
  ]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
