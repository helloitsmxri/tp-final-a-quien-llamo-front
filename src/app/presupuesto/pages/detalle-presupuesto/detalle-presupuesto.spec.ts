import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePresupuesto } from './detalle-presupuesto';

describe('DetallePresupuesto', () => {
  let component: DetallePresupuesto;
  let fixture: ComponentFixture<DetallePresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePresupuesto],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePresupuesto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
