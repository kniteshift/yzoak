# YzOak New Website

## Stack
* Node.js
* Express
* Sass
* Webpack
* jQuery
* EcmaScript 6/Babel
* Materialize-CSS

## Getting Started

In the case you want to make updates on this repo, please clone the repository.

```
── README.md
├── build
├── node_modules
├── package.json
├── server.js
├── src
└── webpack.config.js
```
In this directory, you only need to worry about what's in `src` if you're just making updates on the front end. If want to add a route, for example, like `/contest` you will need to add the request in `/server.js`. Do not touch the `build` folder, as it contains the compiled HTML, CSS, and JavaScript files. This folder and it's files are progammatically generated with a build system from [Webpack](https://webpack.github.io/).

#### Setup instructions

If you skip these steps and just edit the files in `build` folder, I guarantee you will have a bad time.


1. Make sure you have [node.js](https://nodejs.org/en/) and npm installed (npm comes with Node.js)
2. Clone my repo `git clone git@bitbucket.org:YzOak/new_website.git <enter_folder_name_here>`
3. Install the dependencies 

	`npm install`

4. Hack away with the files in `src`

#### Details

```
├── assets
│   ├── js
│   ├── media
│   └── styles
└── index.html
```
Each of these directories contain their respective file types.

* `js`: everything in this folder is written in ES6. `app.js` is the main file that appends items to the DOM, while I've created separate JS files like `append.js` and `listener.js` for either data or helper functions that I end up importing into `app.js`.
* `media`: This contains uncompressed images and video. Webpack will automatically compress these files into the `build`.
* `styles`: All of the styles are written in [Sass](http://sass-lang.com/guide). Any file `_` is a partial that is imported into the `styles.sass` file. Webpack will compile these into CSS, and uglify it to save bandwidth and improve on loading speed.

This project was also built using [MaterializeCSS](http://materializecss.com/). I used their grid and most of their JavaScript components.

#### Compile
Only the front-end will be compiled through Webpack, server side code remains untouched since this application isn't server intensive. It's only purpose is to serve the static files for now.

So to build the front end, all you have to do is run the following script in the command line: 

```
npm run build
```

