import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEditableComponent } from './image-editable.component';

describe('ImageEditableComponent', () => {
  let component: ImageEditableComponent;
  let fixture: ComponentFixture<ImageEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageEditableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
