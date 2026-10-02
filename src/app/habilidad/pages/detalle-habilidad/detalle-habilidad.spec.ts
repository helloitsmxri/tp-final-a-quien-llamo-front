import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleHabilidad } from './detalle-habilidad';

describe('DetalleHabilidad', () => {
  let component: DetalleHabilidad;
  let fixture: ComponentFixture<DetalleHabilidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleHabilidad],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleHabilidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
