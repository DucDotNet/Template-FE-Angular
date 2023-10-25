import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponentsAntDesignComponent } from './base-components-ant-design.component';

describe('BaseComponentsAntDesignComponent', () => {
  let component: BaseComponentsAntDesignComponent;
  let fixture: ComponentFixture<BaseComponentsAntDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseComponentsAntDesignComponent]
    });
    fixture = TestBed.createComponent(BaseComponentsAntDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
