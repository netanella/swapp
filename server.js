const express = require("express");
const port = process.env.PORT || 4000;
const app = express();


app.use(express.static(__dirname));
app.get("/", (req, res) => res.render("index"));
server.listen(process.env.PORT || port);