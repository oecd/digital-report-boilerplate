Default icon-font by Agence'O
=========================================

Tools
-----

[Icomoon](https://icomoon.io/app) is used to generate this icon-font


How-To Update
-------------

* Go to _[icomoon App](https://icomoon.io/app/#/projects)_ website.
* Import file ao-icon-*.json into _Project management_ view.
* Load project previously imported


* Select/Add/Delete icons you want to.
* Click on _generate_ button (bottom of the page).
* Check all icons names/classes.
* Click _Download_ button (bottom of the page).


* Return to the _Project management_ view.
* Save new configuration file (ao-icon-*.json) by clicking _Download_ button.
* Copy configuration file to the local project _fonts/_ folder.
* Copy font files to the same local project _fonts/_ folder.


* Update the local project stylesheets.
* Copy/Paste _variables.scss_ file from archive to your local project font stylesheet (eg: /src/scss/vendor/_ao-icon-*.scss)
* Copy/Paste _style.scss_ file into the same stylesheet (eg: /src/sass/vendor/_ao-icon-*.scss)
* Do `styles` and `fonts` task with the tasks runner to compiled the SASS files, and to copy past the fonts files at the right place in `dist` folder.
* You're done !
