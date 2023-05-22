import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymsComponentComponent } from './synonyms-component.component';

describe('SynonymsComponentComponent', () => {
  let component: SynonymsComponentComponent;
  let fixture: ComponentFixture<SynonymsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynonymsComponentComponent]
    });
    fixture = TestBed.createComponent(SynonymsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
