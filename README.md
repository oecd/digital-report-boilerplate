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
