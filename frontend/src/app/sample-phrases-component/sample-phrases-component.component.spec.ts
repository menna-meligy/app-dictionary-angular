import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePhrasesComponentComponent } from './sample-phrases-component.component';

describe('SamplePhrasesComponentComponent', () => {
  let component: SamplePhrasesComponentComponent;
  let fixture: ComponentFixture<SamplePhrasesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplePhrasesComponentComponent]
    });
    fixture = TestBed.createComponent(SamplePhrasesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
