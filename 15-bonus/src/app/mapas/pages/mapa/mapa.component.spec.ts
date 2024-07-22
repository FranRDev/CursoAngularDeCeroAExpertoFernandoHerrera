import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMapaComponent } from './mapa.component';

describe('MapaComponent', () => {
  let component: PaginaMapaComponent;
  let fixture: ComponentFixture<PaginaMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaMapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
