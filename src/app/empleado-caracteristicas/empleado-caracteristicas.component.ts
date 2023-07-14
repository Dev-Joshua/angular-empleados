import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceEmpleadosService } from '../service-empleados.service';

@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css'],
})
export class EmpleadoCaracteristicasComponent {
  @Output() ccEmpleados = new EventEmitter<string>();

  constructor(private servicioEmp: ServiceEmpleadosService) {}

  addCaracteristicas(value: string) {
    this.servicioEmp.mostrarMensaje(value);
    this.ccEmpleados.emit(value);
  }
}
