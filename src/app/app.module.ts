import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { RegistroParqueoComponent } from './registroparqueo/registroparqueo.component';
import { RegistrosparqueoComponent } from './registrosparqueo/registrosparqueo.component';
import { RegistroParqueoService } from './services/registroparqueo.service';
import {HttpClientModule}  from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiculoComponent,
    RegistroParqueoComponent,
    RegistrosparqueoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    AppRoutingModule
  ],
  providers: [RegistroParqueoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
