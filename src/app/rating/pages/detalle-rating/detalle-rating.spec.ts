import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRating } from './detalle-rating';

describe('DetalleRating', () => {
  let component: DetalleRating;
  let fixture: ComponentFixture<DetalleRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRating],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleRating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
