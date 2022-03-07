import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { Ingreso } from './ingreso/ingreso.model';
import { EgresoService } from './services/egresos/egreso.service';
import { IngresoService } from './services/ingresos/ingreso.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(private ingresoServicio:IngresoService, private egresoServicio:EgresoService){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(iterador => {
      ingresoTotal += iterador.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(iterador => {
      egresoTotal += iterador.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
     return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}



