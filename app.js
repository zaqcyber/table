const express = require('express');
var bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const infos = [];
const port = 3000;






app.get('/', (req, res) => {
    res.render("index", {userField: infos, i: 1});
    // console.log(infos);
});

app.get("/info", (req, res) => {
    res.render("info");
})

app.post("/", (req, res) => {
    const email = req.body.email;
    const lname = req.body.lname;
    const fname = req.body.fname;

    const info = {
        fname: fname,
        lname: lname,
        email: email 
    }

    infos.push(info);

    res.redirect("/")
})

app.listen(port, () => {
console.log(`Server started on port ${port}`)
});

