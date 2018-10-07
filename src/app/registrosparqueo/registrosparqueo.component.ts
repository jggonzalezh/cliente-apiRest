import { Component, OnInit } from '@angular/core';
import { RegistroParqueoService } from '../services/registroparqueo.service';
import { RegistroParqueo } from '../registroparqueo/registroparqueo';

@Component({
  selector: 'app-registrosparqueo',
  templateUrl: './registrosparqueo.component.html',
  styleUrls: ['./registrosparqueo.component.css']
})
export class RegistrosparqueoComponent implements OnInit {
  //Listado de registros de parqueo
  registros: RegistroParqueo[];
  //Servicio

  constructor( private registroParqueoService:RegistroParqueoService ) {
  }

  ngOnInit() {
        this.registroParqueoService.getRegistrosParqueo().subscribe(
        registros => this.registros = registros
     );
  }
}
