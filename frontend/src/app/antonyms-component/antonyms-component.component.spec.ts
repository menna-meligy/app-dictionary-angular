import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntonymsComponentComponent } from './antonyms-component.component';

describe('AntonymsComponentComponent', () => {
  let component: AntonymsComponentComponent;
  let fixture: ComponentFixture<AntonymsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntonymsComponentComponent]
    });
    fixture = TestBed.createComponent(AntonymsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
