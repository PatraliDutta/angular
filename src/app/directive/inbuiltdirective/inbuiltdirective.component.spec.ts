import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltdirectiveComponent } from './inbuiltdirective.component';

describe('InbuiltdirectiveComponent', () => {
  let component: InbuiltdirectiveComponent;
  let fixture: ComponentFixture<InbuiltdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuiltdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
