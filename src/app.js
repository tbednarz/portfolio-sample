const express = require('express')
const hbs = require('hbs')
const path = require('path')


const app = express()
const port = 3000

//paths
const publicDir = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates")
const partialsPath = path.join(__dirname, "../templates/partials")

//handlebars setup
app.set("view engine", "hbs")
app.set("views" , viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDir))

//directory

app.get("", (req,res) => {
    res.render("index", {
        title: "Tres Bednarz"
    })
})



app.listen(port,() => {
    console.log("Server is listening on port "+ port)
})