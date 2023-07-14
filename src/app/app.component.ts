import { Component } from '@angular/core';
import { Empleado } from './models/empleado.model';
import { ServiceEmpleadosService } from './service-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Empleados';

  constructor(private miServicio: ServiceEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Luis', 'Díaz', 'Diseñador', 900),
    new Empleado('Daniel', 'Jimenez', 'Desarrollador Backend', 1200),
    new Empleado('Andres', 'Vargas', 'Diseñador Fullstack', 2000),
    new Empleado('Jesus', 'Potter', 'Scrum Master', 1500),
  ];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.miServicio.mostrarMensaje('Nombre del empleado: ' + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }
}

// Inyecto el  servicio dentro de la classe AppCompnoent, a traves del constructor.
