import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamentoMasculinoComponent } from './alojamento-masculino.component';

describe('AlojamentoMasculinoComponent', () => {
  let component: AlojamentoMasculinoComponent;
  let fixture: ComponentFixture<AlojamentoMasculinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamentoMasculinoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamentoMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
