import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opction5Component } from './opction5.component';

describe('Opction5Component', () => {
  let component: Opction5Component;
  let fixture: ComponentFixture<Opction5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opction5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opction5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
