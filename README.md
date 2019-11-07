# OECD Digital Report

This repository hosts the code blocks necessary to create what we call a _Digital Report_. The blocks will work in desktop view and on mobile devices.

Each block is hosted as an independant module inside the `src/modules` directory containing all necessary JavaScript and SCSS files.

In our Redmine Wiki (search for Digital Reports), you'll find all necessary information, both documentation for each block as well as instructions for how to create a new Digital Report page.

## Post-template creation

1. Don't forget to rename the repository using only lowercase, hyphens and numbers
2. Clone the repository to your local machine
3. Follow the instructions in the Wiki regarding the installation of the `npm` modules etc.

## Env variables

Env variables can be set by creating a .env file (.env.sample can be used as reference. Mainly useful during dev phase).
In any case, system variables will take precedence over ones set using .env file.

## Localization

Static text translations is handled by module (modules may or may not support localization).

When changing an existing module it is **strongly encouraged** to refactor it so that it support localization because:

1. The alternative (duplicating the module code for each supported languages) is time consuming and error prone
2. It is extremely quick and easy to do (matter of minutes)!

Here are the steps (the projections-by-country module can be taken as an example):

- create a .json file in the module directory (see `src/modules/projections-by-country-resources/projections-by-country-resources.json`)
- in `src/localization.js`
  - import the json file
  - add the file content to the `resourceList` array;
  - add a line after localization init: `$('#root-module-element-id').localize({ ns: 'namespace-used-in-localization-json-file' });`

once done, in the module, whereever hardcoded static text would have been used, add `data-i18n="xxxx"` in the containing html element (where xxxx is a valid key in the localization .json file)