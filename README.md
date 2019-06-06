# OECD Digital Report

This repository hosts the code blocks necessary to create what we call a _Digital Report_. The blocks will work in desktop view and on mobile devices.

Each block is hosted as an independant module inside the `src/modules` directory containing all necessary JavaScript and SCSS files.

The following _blocks_ are available:

* `banner` - (**TO BE CONFIRMED**) usually the first section containing a huge image that takes up the full width of the screen as well as some titles, messages, hashtags, share options and buttons
* `blockquote` - a full horizontal section containing a bold and pioneering quote
* `breadcrumb` - horizontal list of links indicating the current position
* `card` - (**TO BE CONFIRMED**) an element that's used inside the `key-facts` block
* `compare` - (**TO BE CONFIRMED**) a section containing an iframe that points to Compare Your Country
* `credits` - a small section toward the bottom containing information regarding the photo credits
* `featured-stories`
* `footer` - the fat footer section
* `go-top-btn` - the button that appears in the bottom-right corner to allow to go back to the top
* `header` - everything from the top until and including the blue menu (OECD Home, About, Countries, Topcis items) 
* `header-publication` - ???
* `header-video` - ???
* `highlight` - ???
* `image-separator` - a section of horizontally grouped images (small format) that form some kind of visual separator of two blocks
* `key-data` - seems to contain one or more infographics, including a title
* `key-facts` - a series of horizontal cards that are slidable and can be shared but don't have an action on click
* `key-facts-slider` - ???
* `key-messages` - ???
* `key-topics` - a series of horizontal, slidable and clickable cards opening new pages
* `panel` - ???
* `podcast` - block containing a title, some blurb and an iframe to display a soundcloud or other embed to play podcasts
* `pop-in` - ???
* `publications` - a section typically titled "Publications and key resources"
* `read-more` - block containing an image and some text and, most importantly, a button that says "Read more"
* `social-sticky` - (**TO BE CONFIRMED**) the globally available share buttons that stick to the right-hand side of the screen (in desktop mode at least)
* `video` - ???
* `video-regular` - ???

------


## How to install
### Requirements
- node.js


### Branch system
Try to use git flow.


## CSS and JSS system
This website use node.js and webpack system.


### Install the system
On first install run this command:
```shell
npm install
```
_More details see: [package.json](/package.json)_


### Where put my files ?
Don't add files to `/dist` folder because files are compiled here. \
Only code in `/src` folder.


### CSS & JS libraries
- Add/Install CSS & JS libraries with `npm`
- Import libs in _.js_ module file. \
	example:
	```
	import 'selectric';
	```
- If necessary, import the SCSS in [_vendors.scss](src/styles/_vendors.scss). \
 example :
	```
	@import "~bootstrap/dist/css/bootstrap-grid.css";
	```


### Compile
Run :
```shell
npm build
```


### Files watching
When the project is watching the HTML/PHP/CSS/JS/IMG files will now automatically refresh in your browser.

* run :
`npm start:dev`
