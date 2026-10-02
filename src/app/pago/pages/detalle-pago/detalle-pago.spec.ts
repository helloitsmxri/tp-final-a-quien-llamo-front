import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePago } from './detalle-pago';

describe('DetallePago', () => {
  let component: DetallePago;
  let fixture: ComponentFixture<DetallePago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePago],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
