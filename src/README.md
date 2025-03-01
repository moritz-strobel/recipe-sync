#### Resources
- http://localhost:4200/
- https://material.angular.io/components/


#### Components Structure & Dependencies:
- angular-material:
	- button
	- checkbox
	- chips
	- dialog
	- divider
	- form-field
	- grid
	- icon
	- input
	- label
	- list
	- menu
	- paginator
	- progress-spinner
	- table
	- toolbar
	- tooltip --> properties: pos:above | showDelay:250 | hideDelay:250
	- tree
	- sidenav
- card-cookbook --> whole thing as click-able label
- card-recipe
- cards-container --> show multiple overviews (generic) 
	- other-flexbox
	- for loop that displays cards
- dialog-cookies as AM-dialog
- footer
	- grid as AM-grid
		- icon-name-container
		- other-flexbox
			- links as AM-button-links
- header as  AM-toolbar, AM-sidenav
	- burger-menu
	- grid as AM-grid
		- icon-name-container
		- search bar
		- button-icon-link-container
			- other-flexbox
				- menu-tree-recipes button as AM-menu
					- tags and sub tags displayed as AM-tree
				- cookbook as AM-icon
				- profile as AM-icon
				- home as AM-icon
- icon-name-container
	- other-flexbox
		- logo as other-component
		- company-name as AM
- other:
	- flexbox --> didnt work out stucked to mat-list or mat-grid-list
	- logo 
	- search bar
		- chips as AM-chips-with-input
	- tag
- overlay-forgot-password
	- form-field as AM-form-field
- overlay-login
	- form-field as AM-form-field
- overlay-register
	- stepper as angular-material-stepper
	- form-field as AM-form-field
- page-about-us --> static simple SCSS
- [ ] page-cookbook-home --> linked to after icon cookbook was clicked
- [ ] page-cookbook
	- form-field as AM-form-field
- page-extended-search
	- grid
		- form-field as AM-form-field
			- search bar
		- container-search-result 
			- paginator as AM-paginator
				- cards-container
- page-guidelines --> static simple SCSS
- page-impress --> static simple SCSS
- page-landing --> landing / home page
- page-profile
	- form-field as AM-form-field
- page-recipe --> display a recipe, has a view and edit mode
	- portion-calculator
	- form-field as AM-form-field
- page-report --> mostly static simple SCSS
	- form-field as AM-form-field


#### Services
- Create
- Read
- Update 
- Delete 
- Other
	- getRatingAvg() : return float
	- search() : return List of Entities
		---> search by above entities, ingredients and combined searches of those, e.g. recipes of user x with rating > 4,3
	- authenticateUser() : return (bool, errMsg)


#### Types
- user
- recipe
- tag
- category
- rating
- comment
- notification
- cookbook


#### Layout Guidelines:
- Von außen nach innen
- Wo grid, wo Flexbox
- mobile First
- main layout in appcomponent.html:
	- header
	- router-outlet
	- footer
	- overlay (hidden by default)
	- dialog-cookies


#### ToDo
- Implement all Components
- Realize all dependencies 
- Guards (geschützte Routen e.g. Profilepage)
- Restful API to nest.js server
- Font: Roboto
- Favicon