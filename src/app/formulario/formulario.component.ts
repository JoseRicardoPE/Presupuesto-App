import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';
import { EgresoService } from '../services/egresos/egreso.service';
import { IngresoService } from '../services/ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoService, 
              private egresoServicio: EgresoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento:any){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}

