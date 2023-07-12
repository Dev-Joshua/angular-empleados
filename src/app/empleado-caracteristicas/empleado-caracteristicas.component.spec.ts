import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas.component';

describe('EmpleadoCaracteristicasComponent', () => {
  let component: EmpleadoCaracteristicasComponent;
  let fixture: ComponentFixture<EmpleadoCaracteristicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoCaracteristicasComponent]
    });
    fixture = TestBed.createComponent(EmpleadoCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
