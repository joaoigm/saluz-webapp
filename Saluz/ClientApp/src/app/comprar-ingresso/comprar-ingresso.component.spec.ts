import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarIngressoComponent } from './comprar-ingresso.component';

describe('ComprarIngressoComponent', () => {
  let component: ComprarIngressoComponent;
  let fixture: ComponentFixture<ComprarIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarIngressoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
