import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas/empleado-caracteristicas.component';
import { ServiceEmpleadosService } from './service-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoCaracteristicasComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ServiceEmpleadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
