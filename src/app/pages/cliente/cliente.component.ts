import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  cliente: cliente=new cliente();
constructor(public clienteService: ClienteService,private router: Router){
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
  if(params){
    console.log(params)
    this.cliente = new cliente()
    this.cliente = params['cliente']
  }
}
guardar() {
  console.log(this.cliente)
   this.clienteService.save(this.cliente)
   this.cliente = new cliente()
 }

}
