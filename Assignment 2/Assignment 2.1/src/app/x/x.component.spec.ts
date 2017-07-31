import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { xComponent } from './x.component';

describe('xComponent', () => {
  let component: xComponent;
  let fixture: ComponentFixture<xComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ xComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
