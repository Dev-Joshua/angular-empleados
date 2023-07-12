import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css'],
})
export class EmpleadoCaracteristicasComponent {
  @Output() ccEmpleados = new EventEmitter<string>();

  addCaracteristicas(value: string) {
    this.ccEmpleados.emit(value);
  }
}
