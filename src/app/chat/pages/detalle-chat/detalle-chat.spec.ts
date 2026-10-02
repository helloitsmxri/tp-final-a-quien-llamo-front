import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleChat } from './detalle-chat';

describe('DetalleChat', () => {
  let component: DetalleChat;
  let fixture: ComponentFixture<DetalleChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleChat],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
