import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponentAntComponent } from './base-component-ant.component';

describe('BaseComponentAntComponent', () => {
  let component: BaseComponentAntComponent;
  let fixture: ComponentFixture<BaseComponentAntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseComponentAntComponent]
    });
    fixture = TestBed.createComponent(BaseComponentAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
