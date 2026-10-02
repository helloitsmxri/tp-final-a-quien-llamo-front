import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleUbicacion } from './detalle-ubicacion';

describe('DetalleUbicacion', () => {
  let component: DetalleUbicacion;
  let fixture: ComponentFixture<DetalleUbicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleUbicacion],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleUbicacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
