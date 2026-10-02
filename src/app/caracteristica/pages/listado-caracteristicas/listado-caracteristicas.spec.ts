import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoCaracteristicas } from './listado-caracteristicas';

describe('ListadoCaracteristicas', () => {
  let component: ListadoCaracteristicas;
  let fixture: ComponentFixture<ListadoCaracteristicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoCaracteristicas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoCaracteristicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
