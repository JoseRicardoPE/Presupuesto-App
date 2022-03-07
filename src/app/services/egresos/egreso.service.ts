import { Injectable } from '@angular/core';
import { Egreso } from 'src/app/egreso/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  constructor() { }

  egresos:Egreso[] = [
    new Egreso("Arriendo", 1100000),
    new Egreso("Mercado", 800000)
  ];

  eliminar(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
