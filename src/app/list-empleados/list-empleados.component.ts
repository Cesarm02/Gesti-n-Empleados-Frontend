import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoServicio : EmpleadoService, private router :Router) {
   }

  ngOnInit(): void {
    
    this.obtenerEmpleado();
  }

  private obtenerEmpleado(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  } 

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(
      dato => {
        console.log(dato);
        this.obtenerEmpleado();
      }
    );
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado', id]);
  }

  verDetalles(id:number){
    this.router.navigate(['detalle-empleado', id]);
  }

}
