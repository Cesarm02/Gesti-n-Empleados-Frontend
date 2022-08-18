import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path : 'empleados', component:ListEmpleadosComponent},
  {path : '', redirectTo: 'empleados', pathMatch:'full'},
  {path : 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path : 'detalle-empleado/:id', component: EmpleadoDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
