import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceEmpleadosService {
  constructor() {}

  mostrarMensaje(mensaje: string) {
    alert(mensaje);
  }
}
