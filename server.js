const website = require('express')(); 
const hostname = require("os").hostname(); 
website.get('/', (req, res)=> { 
    res.send( 
        `<!DOCTYPE html>` + 
        `<html>` + 
            `<body>` + 
                `<h1>Docker Container</h1>` + 
                `hostname: ${hostname}` + 
            `</body>` + 
        `</html>`
    )
}); 

website.listen(8080, "0.0.0.0")