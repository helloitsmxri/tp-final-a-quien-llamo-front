import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCaracteristica } from './editar-caracteristica';

describe('EditarCaracteristica', () => {
  let component: EditarCaracteristica;
  let fixture: ComponentFixture<EditarCaracteristica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCaracteristica],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCaracteristica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
