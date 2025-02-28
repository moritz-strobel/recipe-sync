import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTreeRecipesComponent } from './menu-tree-recipes.component';

describe('MenuTreeRecipesComponent', () => {
  let component: MenuTreeRecipesComponent;
  let fixture: ComponentFixture<MenuTreeRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTreeRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTreeRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
