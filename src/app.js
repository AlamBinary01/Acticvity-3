const express = require('express');
const app = express();
const path = require("path");
const mysql = require('mysql');
app.use(express.static(path.join(__dirname, "../public")));
//views
app.set("view engine", "ejs");
let database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'act'
});
database.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Database Connected!");
    }
});


app.get("/", (req, res) => {
    const Query = "SELECT * FROM NORMAL";
    database.query(Query, function (error, ans) {
        if (error) throw error;
        res.render("index", {
            data: ans
        });
    //    console.log(ans);
    });
});

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Listening At Port http://localhost:3000.");
})
