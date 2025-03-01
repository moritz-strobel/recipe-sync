import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLinkContainerComponent } from './button-icon-link-container.component';

describe('ButtonIconLinkContainerComponent', () => {
  let component: ButtonIconLinkContainerComponent;
  let fixture: ComponentFixture<ButtonIconLinkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLinkContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLinkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
