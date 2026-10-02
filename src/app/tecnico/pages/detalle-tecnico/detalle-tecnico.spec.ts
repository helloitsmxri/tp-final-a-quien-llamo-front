import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTecnico } from './detalle-tecnico';

describe('DetalleTecnico', () => {
  let component: DetalleTecnico;
  let fixture: ComponentFixture<DetalleTecnico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTecnico],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTecnico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
