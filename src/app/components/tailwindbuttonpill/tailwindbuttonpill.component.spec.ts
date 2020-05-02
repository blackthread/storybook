import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindbuttonpillComponent } from './tailwindbuttonpill.component';

describe('TailwindbuttonpillComponent', () => {
  let component: TailwindbuttonpillComponent;
  let fixture: ComponentFixture<TailwindbuttonpillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailwindbuttonpillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindbuttonpillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
