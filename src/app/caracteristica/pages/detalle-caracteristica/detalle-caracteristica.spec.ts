import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCaracteristica } from './detalle-caracteristica';

describe('DetalleCaracteristica', () => {
  let component: DetalleCaracteristica;
  let fixture: ComponentFixture<DetalleCaracteristica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleCaracteristica],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleCaracteristica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
