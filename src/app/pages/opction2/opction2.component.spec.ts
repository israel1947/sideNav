import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opction2Component } from './opction2.component';

describe('Opction2Component', () => {
  let component: Opction2Component;
  let fixture: ComponentFixture<Opction2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opction2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
