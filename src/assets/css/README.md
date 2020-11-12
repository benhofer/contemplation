# TEMPORA Website CSS

Import styles component by component according to https://create-react-app.dev/docs/adding-a-css-modules-stylesheet. 

## Folder Structure

- **components**: each file corresponds to a particular component.
- **global**: boilerplate, grid, styles that will be imported at the global level
- **objects**: styles for any classed elements nested within the component level.
- **utilities**: helper classes, hacks, etc. !important (shame)
- **pages**: each file corresponds with a page in the system.


## Naming Conventions

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet

For reusable objects, prefix with 'o-'. Likewise for reusable utilities with 'u-'. 

## Responsive Breakpoints

- xs: smaller than sm
- sm: min-width: 48em (768px)
- md: min-width: 62em (992px)
- lg: min-width: 79em (1264px)

## Typography

Main styles defined in global/typography.css. 
