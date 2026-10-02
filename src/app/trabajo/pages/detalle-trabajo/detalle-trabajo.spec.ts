import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTrabajo } from './detalle-trabajo';

describe('DetalleTrabajo', () => {
  let component: DetalleTrabajo;
  let fixture: ComponentFixture<DetalleTrabajo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTrabajo],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTrabajo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
