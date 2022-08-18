import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Url de consumo (Backend)
  private baseUrl = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { 
  }

    //Obtener lista de empleados
    obtenerListaDeEmpleados(): Observable <Empleado[]>{
      return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
    }

    //Guardar empleado
    guardarEmpleado(empleado:Empleado): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}`, empleado);
    }

    //Actualizar
    actualizarEmpleado(id:number, empleado:Empleado): Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`, empleado);
    }

    //Eliminar
    eliminarEmpleado(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

    //Obtener por id
    obtenerEmpleadoPorId(id:number):Observable<Empleado>{
      return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`);
    }

}
