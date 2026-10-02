import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMensaje } from './detalle-mensaje';

describe('DetalleMensaje', () => {
  let component: DetalleMensaje;
  let fixture: ComponentFixture<DetalleMensaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMensaje],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleMensaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
