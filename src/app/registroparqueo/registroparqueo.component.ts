import { Component, OnInit } from '@angular/core';
import { RegistroParqueo } from './registroparqueo';
import { Vehiculo } from '../vehiculo/vehiculo';
import { RegistroParqueoService } from '../services/registroparqueo.service';
import {Router,ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-registroparqueo',
  templateUrl: './registroparqueo.component.html',
  styleUrls: ['./registroparqueo.component.css']
})
export class RegistroParqueoComponent implements OnInit {
  
  public registroParqueo:RegistroParqueo = new RegistroParqueo();
  public titulo:string="Registrar Entrada";
  public vehiculo:Vehiculo=new Vehiculo();
  public tiporegistro :string;
 

  constructor(private registroParqueoService:RegistroParqueoService,
              private router: Router,
              private activatedRoute:ActivatedRoute
             ) {
             this.registroParqueo.vehiculo=new Vehiculo();
              }

  ngOnInit() {
    this.cargarRegistroParqueo()
  }

  cargarRegistroParqueo():void{

    this.activatedRoute.params.subscribe(params =>{
      
    var placa;

    if(params['placa']){
        
      placa = params['placa'];
      this.tiporegistro="salida";
      this.titulo="Registrar Salida";

    }
  
    if(placa){
      this.registroParqueoService.getRegistroParqueo(placa).subscribe( response =>this.registroParqueo =response)   
    }

    })
}

  public create():void{
    this.registroParqueoService.create(this.registroParqueo).subscribe(
      response =>{
                  swal(
                    'Ingreso Exitoso',
                    `vehiculo placa ${this.registroParqueo.vehiculo.placa} registrado Exitosamente`,
                    'success',
                  )
                  this.router.navigate(['/registrosparqueo'])
                  },
      error =>{
        console.log(error)
        swal(
          'Ingreso Fallido',
          ` ${error.error. message} ingreso Fallo`,
          'error',
        ) 
        }

    )

  }

  update():void{
    this.registroParqueoService.update(this.registroParqueo)
    .subscribe( 
     (response) =>{
       this.registroParqueo =response
       swal(
        'Salida Exitoso',
        `vehiculo placa ${this.registroParqueo.vehiculo.placa} Salio Exitosamente`,
        'success',
      )
      },
      (error)=>{
        swal(
          'Salida Fallida',
          `Se presentaron problemas en la salida vehiculo placa ${this.registroParqueo.vehiculo.placa}`,
          'error',
        )}
    )
    
 }
}
