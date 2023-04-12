/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParamArroComponent } from './paramArro.component';

describe('ParamArroComponent', () => {
  let component: ParamArroComponent;
  let fixture: ComponentFixture<ParamArroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamArroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamArroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
