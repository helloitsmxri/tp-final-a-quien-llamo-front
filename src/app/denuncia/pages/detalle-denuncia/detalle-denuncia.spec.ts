import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleDenuncia } from './detalle-denuncia';

describe('DetalleDenuncia', () => {
  let component: DetalleDenuncia;
  let fixture: ComponentFixture<DetalleDenuncia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDenuncia],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleDenuncia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
