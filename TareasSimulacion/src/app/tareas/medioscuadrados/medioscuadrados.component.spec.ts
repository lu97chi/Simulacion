import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioscuadradosComponent } from './medioscuadrados.component';

describe('MedioscuadradosComponent', () => {
  let component: MedioscuadradosComponent;
  let fixture: ComponentFixture<MedioscuadradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioscuadradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioscuadradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
