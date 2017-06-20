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
├── misc
├── node_modules
├── package.json
├── server.js
├── src
└── webpack.config.js
```
In this directory, you only need to worry about what's in `src` if you're just making updates on the front end for the **main website**. Do not touch the `build` folder, as it contains the compiled HTML, CSS, and JavaScript files. This folder and it's files are progammatically generated with a build system from [Webpack](https://webpack.github.io/).

### Setup instructions

If you skip these steps and just edit the files in `build` folder, I guarantee you will have a bad time.


1. Make sure you have [node.js](https://nodejs.org/en/) and npm installed (npm comes with Node.js)
2. Clone my repo `git clone git@bitbucket.org:YzOak/new_website.git <enter_folder_name_here>`
3. Install the dependencies 

	`npm install`

4. Hack away with the files in `src`

### Details

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

## Additional Pages
### Overview
This section will cover how to add additional pages based on the previously outlined folder structure for organization, efficiency and troubleshooting. 

Additional pages may not have the sugary goodness of ES6, Sass, or Webpack.

### Routing
If you want to add a route, for example, like `/contest` you will first need to add the folder into `/misc` and then request in `/routes.js`. In example:

    app.get('/gq', (req, res) => {
        res.status(200).render(misc('gq', 'index.html'))
    })

The first parameter in a `app.get` is the path of the browser. Since `'/gq'` is the path in the example, the user will take be going to *www.yzoak.co/gq*. Next is time to setup the request(`req`) and response (`res`). The **request** is the client to server request, meaning it's asking for the `/gq` route, there is usualyl meta data that is attached with these requests. The **response** is what the server is sending back to a client, such as a status code of 200 (which means OK!), and a file.  

If you need more information, check out the [Express API Documentation](http://expressjs.com/en/4x/api.html).

The `misc` function takes into arguments. The name of a folder, and the filename that it should render. If your folder is inside the `misc` folder, just type in the folder name, and the html file that you want the user to see when they go to this route.

### Disabling Pages
If you want to inevitably delete pages, due to age and time frame that it's been there, then **PLEASE** make sure to change the status code, keep the route, and possibly redirect the user to another page. Here's a [list of status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). This is important for SEO, because Google may have already crawled those pages, and not properly updating the status can hurt.

## Notes / To Do
- Replace Webpack with Gulp for building/compilation
- Add Webpack back in for dependency management

## Contact
- This website and server was created by Alan Lee
- If any assistance is required, please contact Alan Lee @ alanleunglee@gmail.com