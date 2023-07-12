import { Component, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css'],
})
export class EmpleadoHijoComponent {
  @Input() empleado!: Empleado;
  @Input() indice!: number;
}

// Le añado el signo ! para que acepte el valor nulo y asi no cambiar la configuracion de modo estricto en tsconfig.json
// Estos @Input almacenaran la informacion de las variables que declaramos en el template padre para ser usadas en  el tempalate  hijo
