const express = require("express");

const app = express();

app.use("/", express.static("./public"));

app.listen(3030, () => console.log("App listening on port 3030"));