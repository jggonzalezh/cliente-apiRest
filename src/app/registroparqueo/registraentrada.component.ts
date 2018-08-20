import { Component, OnInit } from '@angular/core';
import { RegistroParqueo } from './registroparqueo';
import { Vehiculo } from '../vehiculo/vehiculo';
import { RegistroParqueoService } from './registroparqueo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registraentrada',
  templateUrl: './registraentrada.component.html',
  styleUrls: ['./registraentrada.component.css']
})
export class RegistraEntradaComponent implements OnInit {


  private registroParqueo:RegistroParqueo = new RegistroParqueo();


  private titulo:string="Registrar Entrada";

  constructor(private registroParqueoService:RegistroParqueoService,
              private router: Router,
              private activatedRoute:ActivatedRoute
             ) {

              }

  ngOnInit() {
    this.cargarRegistroParqueo()
  }

    cargarRegistroParqueo():void{
      this.activatedRoute.params.subscribe(params =>{
      let placa = params['placa']
      if(placa){
       this.registroParqueoService.getRegistroParqueo(placa).subscribe( (registroParqueo)=>this.registroParqueo =registroParqueo)
      }

      })
  }

  public create():void{
    this.registroParqueoService.create(this.registroParqueo).subscribe(
      response =>this.router.navigate(['/registroparqueo'])
    )

  }

}
