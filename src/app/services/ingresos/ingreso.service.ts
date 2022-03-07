import { Injectable } from '@angular/core';
import { Ingreso } from 'src/app/ingreso/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor() { }

  ingresos:Ingreso[] = [
    new Ingreso("Salario", 4000000),
    new Ingreso("Venta Carro", 10000000)
  ];

  eliminar(ingreso:Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
