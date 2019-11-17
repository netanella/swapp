const express = require("express");
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(__dirname));
app.get("/", (req, res) => res.render("index.html"));
server.listen(process.env.PORT || port);