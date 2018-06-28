import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocalServiceComponent } from './consume-local-service.component';

describe('ConsumeLocalServiceComponent', () => {
  let component: ConsumeLocalServiceComponent;
  let fixture: ComponentFixture<ConsumeLocalServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocalServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
