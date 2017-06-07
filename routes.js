const path = require('path')
const misc = (folder, file) => { return path.join(__dirname, 'misc', folder, file) }

// The misc function
// 1. Place your folder with the assets and everything into the misc folder (These folders should be separate from the main website)
// 2. Run the misc function as seen below in the GQ example, it returns the path of the folder that you want, AND the HTML file that the user should see
// 3. app.get tells the Express router that the client (aka the browser) is making a request to get something
// 4. The first argument '/gq' is the route where the user is going to... in example https://www.yzoak.co/gq 
// 5. The (req, res) => {} is required as parameters from the Express library. Req is short for request (the user request), res is short for response (what should the server respond?)
// 6. res.status(200) This tells the server to first respond with response of status 200 (which means OK!)
// 7. Then it is chained to .render which takes in the argument of the filepath for the HTML to show the user
// 8. If you want to remove the file later on change it to res.status(301) ... Code 301 means the page has moved permanently.
// This is important for SEO so that you can tell Google/Bing/Yahoo that the pages content isn't entirely gone, it's shifted.
// 9. Finally, you can set it to redirect by changing the .redirect function... in example res.status(301).redirect('someindex.html')
// The quotation or apostrophe's are important  

// module.exports = (app) => {

//     // For contest and landing pages
//     app.get('/gq', (req, res) => {
//         res.status(200).render(misc('gq', 'index.html'))
//     })
    
// }