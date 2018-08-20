import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { RegistroparqueoComponent } from './registroparqueo/registroparqueo.component';
import { RegistroParqueoService } from './registroparqueo/registroparqueo.service';
import {RouterModule,Routes} from "@angular/router";
import {HttpClientModule}  from "@angular/common/http";
import { RegistraEntradaComponent } from './registroparqueo/registraentrada.component';
import { RegistroSalidaComponent } from './registroparqueo/registrosalida.component';
import {FormsModule} from '@angular/forms';

const routes: Routes =[
{path:'',redirectTo:'/registroparqueo',pathMatch:'full'},
{path:'directiva',component:DirectivaComponent},
{path:'registroparqueo',component:RegistroparqueoComponent},
{path:'registroparqueo/registroentrada',component:RegistraEntradaComponent},
{path:'registroparqueo/registrosalida/:placa',component:RegistroSalidaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    VehiculoComponent,
    RegistroparqueoComponent,
    RegistraEntradaComponent,
    RegistroSalidaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistroParqueoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
