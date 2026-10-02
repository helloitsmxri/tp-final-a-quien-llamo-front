import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCaracteristica } from './crear-caracteristica';

describe('CrearCaracteristica', () => {
  let component: CrearCaracteristica;
  let fixture: ComponentFixture<CrearCaracteristica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCaracteristica],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearCaracteristica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
