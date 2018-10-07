import { Injectable } from '@angular/core';
import { RegistroParqueo } from 'src/app/registroparqueo/registroparqueo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegistroParqueoService {

  private urlEndPoint:string ="http://localhost:8080/api/registrosParqueo";
  private httpHeaders = new  HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  getRegistrosParqueo(): Observable<RegistroParqueo[]>{
  //return of(REGISTROS);
  return this.http.get<RegistroParqueo[]>(this.urlEndPoint);
  }

   create (registroParqueo:RegistroParqueo) : Observable<RegistroParqueo>{
   return this.http.post<RegistroParqueo>(this.urlEndPoint,registroParqueo,{headers:this.httpHeaders})

   }

   getRegistroParqueo(placa): Observable<RegistroParqueo>{
     return this.http.get<RegistroParqueo>(`${this.urlEndPoint}/${placa}`)
   }

   getRegistroSalida(placa,estado): Observable<RegistroParqueo>{
    return this.http.get<RegistroParqueo>(`${this.urlEndPoint}/${placa}/${estado}`)
  }


   update(registroParqueo:RegistroParqueo): Observable<RegistroParqueo>{
     return this.http.put<RegistroParqueo>(`${this.urlEndPoint}/${registroParqueo.vehiculo.placa}`, registroParqueo, {headers: this.httpHeaders})
   }


}
