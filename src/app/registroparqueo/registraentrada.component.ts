import { Component, OnInit } from '@angular/core';
import { RegistroParqueo } from './registroparqueo';
import { Vehiculo } from '../vehiculo/vehiculo';
import { RegistroParqueoService } from './registroparqueo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registraentrada',
  templateUrl: './registraentrada.component.html',
  styleUrls: ['./registraentrada.component.css']
})
export class RegistraEntradaComponent implements OnInit {


  private registroParqueo:RegistroParqueo = new RegistroParqueo();
  private vehiculo:Vehiculo=new Vehiculo();

  private titulo:string="Registrar Entrada";

  constructor(private registroParqueoService:RegistroParqueoService,
              private router: Router
             ) {
             this.registroParqueo.vehiculo=new Vehiculo();
              }

  ngOnInit() {

  }

  public create():void{
    this.registroParqueoService.create(this.registroParqueo).subscribe(
      response =>this.router.navigate(['/registroparqueo'])
    )

  }

}
