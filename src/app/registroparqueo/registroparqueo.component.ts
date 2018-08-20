import { Component, OnInit } from '@angular/core';
import { RegistroParqueoService } from './registroparqueo.service';
import { RegistroParqueo } from './registroparqueo';
import { REGISTROS } from './registrosparqueo.json';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registroparqueo',
  templateUrl: './registroparqueo.component.html',
  styleUrls: ['./registroparqueo.component.css']
})
export class RegistroparqueoComponent implements OnInit {

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
