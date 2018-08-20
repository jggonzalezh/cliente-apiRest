import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/vehiculo/vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

 vehiculos: Vehiculo[]=[
  {placa:"DHU403",tipo:"CARRO",cilindraje:"1.4"},
  {placa:"DHU404",tipo:"CARRO",cilindraje:"1.3"}
];
  constructor() { }

  ngOnInit() {
  }

}
