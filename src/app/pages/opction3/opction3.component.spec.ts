import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opction3Component } from './opction3.component';

describe('Opction3Component', () => {
  let component: Opction3Component;
  let fixture: ComponentFixture<Opction3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opction3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opction3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
