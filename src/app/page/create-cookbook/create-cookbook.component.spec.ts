import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCookbookComponent } from './create-cookbook.component';

describe('CreateCookbookComponent', () => {
  let component: CreateCookbookComponent;
  let fixture: ComponentFixture<CreateCookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCookbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
