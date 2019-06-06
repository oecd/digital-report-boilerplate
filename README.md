# OECD Digital Report
This readme doesn't mean you can't communicate with your co-workers ! \
If you have any doubts, just ask for help !


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
