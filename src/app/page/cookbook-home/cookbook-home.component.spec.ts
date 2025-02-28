import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookHomeComponent } from './cookbook-home.component';

describe('CookbookHomeComponent', () => {
  let component: CookbookHomeComponent;
  let fixture: ComponentFixture<CookbookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookbookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
