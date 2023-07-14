import { TestBed } from '@angular/core/testing';

import { ServiceEmpleadosService } from './service-empleados.service';

describe('ServiceEmpleadoosService', () => {
  let service: ServiceEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
