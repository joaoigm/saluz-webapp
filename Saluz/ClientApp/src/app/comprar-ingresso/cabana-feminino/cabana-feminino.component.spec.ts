import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabanaFemininoComponent } from './cabana-feminino.component';

describe('CabanaFemininoComponent', () => {
  let component: CabanaFemininoComponent;
  let fixture: ComponentFixture<CabanaFemininoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabanaFemininoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabanaFemininoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
