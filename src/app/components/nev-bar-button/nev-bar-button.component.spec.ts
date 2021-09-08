import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevBarButtonComponent } from './nev-bar-button.component';

describe('NevBarButtonComponent', () => {
  let component: NevBarButtonComponent;
  let fixture: ComponentFixture<NevBarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevBarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NevBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
