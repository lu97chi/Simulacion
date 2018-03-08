import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosaleatoriosComponent } from './numerosaleatorios.component';

describe('NumerosaleatoriosComponent', () => {
  let component: NumerosaleatoriosComponent;
  let fixture: ComponentFixture<NumerosaleatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosaleatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosaleatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
