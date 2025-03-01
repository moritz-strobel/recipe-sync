import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNameContainerComponent } from './icon-name-container.component';

describe('IconNameContainerComponent', () => {
  let component: IconNameContainerComponent;
  let fixture: ComponentFixture<IconNameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconNameContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconNameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
