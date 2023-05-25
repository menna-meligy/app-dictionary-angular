import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendResultComponent } from './backend-result.component';

describe('BackendResultComponent', () => {
  let component: BackendResultComponent;
  let fixture: ComponentFixture<BackendResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendResultComponent]
    });
    fixture = TestBed.createComponent(BackendResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
