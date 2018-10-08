import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}  from "@angular/common/http";
import { FormsModule} from '@angular/forms';
import { DataTableModule} from "angular-6-datatable";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistroParqueoComponent } from './registroparqueo/registroparqueo.component';
import { RegistrosparqueoComponent } from './registrosparqueo/registrosparqueo.component';

import { RegistroParqueoService } from './services/registroparqueo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroParqueoComponent,
    RegistrosparqueoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RegistroParqueoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
