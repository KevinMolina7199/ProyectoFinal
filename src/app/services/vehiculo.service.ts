import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{vehiculo} from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  listaVehiculo: vehiculo[]=[]

  constructor(private http: HttpClient) { }
    save(vehiculo: vehiculo){
  this.listaVehiculo.push(vehiculo);
  }
  listar():vehiculo[] {
    // Devolver la lista interna de clientes
    return this.listaVehiculo;
  }
}
