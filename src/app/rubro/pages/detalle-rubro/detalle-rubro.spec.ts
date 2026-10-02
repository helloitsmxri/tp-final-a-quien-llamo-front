import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRubro } from './detalle-rubro';

describe('DetalleRubro', () => {
  let component: DetalleRubro;
  let fixture: ComponentFixture<DetalleRubro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRubro],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleRubro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
