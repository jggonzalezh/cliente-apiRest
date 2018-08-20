import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vehiculos Actualmente en el Parqueadero';
  dominio: string = "co.com.ceiba";
  autor: string ="gabriel.gonzalez"
}
