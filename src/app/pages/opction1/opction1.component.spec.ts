import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opction1Component } from './opction1.component';

describe('Opction1Component', () => {
  let component: Opction1Component;
  let fixture: ComponentFixture<Opction1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opction1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
