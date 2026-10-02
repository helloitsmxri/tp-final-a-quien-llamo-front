import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePortfolio } from './detalle-portfolio';

describe('DetallePortfolio', () => {
  let component: DetallePortfolio;
  let fixture: ComponentFixture<DetallePortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePortfolio],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePortfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
