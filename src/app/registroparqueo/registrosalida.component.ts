import { Component, OnInit } from '@angular/core';
import { RegistroParqueo } from './registroparqueo';
import { Vehiculo } from '../vehiculo/vehiculo';
import { RegistroParqueoService } from './registroparqueo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registrosalida',
  templateUrl: './registrosalida.component.html',
  styleUrls: ['./registrosalida.component.css']
})
export class RegistroSalidaComponent implements OnInit {

  private registroParqueo:RegistroParqueo = new RegistroParqueo();

  private titulo:string="Registrar Salida";

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

  update():void{
     this.registroParqueoService.update(this.registroParqueo)
     .subscribe( registroParqueo =>this.router.navigate(['/registroparqueo'])
     )
  }

}
