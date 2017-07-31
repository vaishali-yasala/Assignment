import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { childComponent } from './child.component';

describe('childComponent', () => {
  let component: childComponent;
  let fixture: ComponentFixture<childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
