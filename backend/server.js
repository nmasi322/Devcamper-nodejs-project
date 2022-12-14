const express = require("express")
// load env vars
require("dotenv").config({path: "./config/config.env"})

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${port}`);
})