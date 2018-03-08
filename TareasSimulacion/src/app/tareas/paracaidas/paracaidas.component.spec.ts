import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParacaidasComponent } from './paracaidas.component';

describe('ParacaidasComponent', () => {
  let component: ParacaidasComponent;
  let fixture: ComponentFixture<ParacaidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParacaidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParacaidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
