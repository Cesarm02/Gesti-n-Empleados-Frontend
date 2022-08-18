import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor(private empleadoServicio: EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.guardarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irListaEmpleado();
    }, error => console.log(error));
  }

  irListaEmpleado(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
