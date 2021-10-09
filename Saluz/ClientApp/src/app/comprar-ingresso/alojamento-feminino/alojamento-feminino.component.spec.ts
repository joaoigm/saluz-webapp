import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamentoFemininoComponent } from './alojamento-feminino.component';

describe('AlojamentoFemininoComponent', () => {
  let component: AlojamentoFemininoComponent;
  let fixture: ComponentFixture<AlojamentoFemininoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamentoFemininoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamentoFemininoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
