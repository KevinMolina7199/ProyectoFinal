import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   listaClientes: cliente[]=[];

  constructor(private http: HttpClient) { }
  save(cliente: cliente){
  this.listaClientes.push(cliente);
  }
  listar():cliente[] {
    // Devolver la lista interna de clientes
    return this.listaClientes;
  }
}
