import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleablebuttonComponent } from './toggleablebutton.component';

describe('ToggleablebuttonComponent', () => {
  let component: ToggleablebuttonComponent;
  let fixture: ComponentFixture<ToggleablebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleablebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleablebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
