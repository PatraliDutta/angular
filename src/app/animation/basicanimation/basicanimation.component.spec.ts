import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicanimationComponent } from './basicanimation.component';

describe('BasicanimationComponent', () => {
  let component: BasicanimationComponent;
  let fixture: ComponentFixture<BasicanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
