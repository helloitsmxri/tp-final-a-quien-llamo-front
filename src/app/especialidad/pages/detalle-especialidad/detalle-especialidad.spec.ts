import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEspecialidad } from './detalle-especialidad';

describe('DetalleEspecialidad', () => {
  let component: DetalleEspecialidad;
  let fixture: ComponentFixture<DetalleEspecialidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEspecialidad],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEspecialidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
