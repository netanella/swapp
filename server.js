const path = require("path");
const express = require("express");
const router = express.Router();
const port = process.env.PORT || 4000;

const server = express();
server.use(express.static("dist"));
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "dist", "index.html")));

server.use("/", router);
server.listen(port, () => console.log("Server is running..."));