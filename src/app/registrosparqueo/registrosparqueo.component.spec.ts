import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosparqueoComponent } from './registrosparqueo.component';

describe('RegistrosparqueoComponent', () => {
  let component: RegistrosparqueoComponent;
  let fixture: ComponentFixture<RegistrosparqueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosparqueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosparqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
