import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabanaMasculinoComponent } from './cabana-masculino.component';

describe('CabanaMasculinoComponent', () => {
  let component: CabanaMasculinoComponent;
  let fixture: ComponentFixture<CabanaMasculinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabanaMasculinoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabanaMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
