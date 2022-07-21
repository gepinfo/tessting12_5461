import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingtoComponent } from './testingto.component';

describe('TestingtoComponent', () => {
  let component: TestingtoComponent;
  let fixture: ComponentFixture<TestingtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});