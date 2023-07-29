import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {
  vehiculo: vehiculo=new vehiculo();
  constructor(public vehiculoService: VehiculoService,private router: Router){
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
  if(params){
    console.log(params)
    this.vehiculo = new vehiculo()
    this.vehiculo = params['vehiculo']
  }
}
guardar() {
  console.log(this.vehiculo)
   this.vehiculoService.save(this.vehiculo)
   this.vehiculo = new vehiculo()
 }

}
