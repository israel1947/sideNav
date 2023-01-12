import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opction4Component } from './opction4.component';

describe('Opction4Component', () => {
  let component: Opction4Component;
  let fixture: ComponentFixture<Opction4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opction4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opction4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
