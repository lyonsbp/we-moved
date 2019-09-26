const path = require('path')
const express = require("express");
const app = express();
const port = 8080;

function startApp({ pageTitle, appName, link }) {
  app.set('views', path.join(__dirname, '/views'))
  app.set("view engine", "pug");
  app.get("/index.html", (req, res) => {
    res.render("index", { pageTitle, appName, link });
  });

  app.get("*", (req, res) => res.redirect("/index.html"));

  app.listen(port, () => console.log(`App listening on port: ${port}`));
}

startApp({
  pageTitle: 'We Moved!',
  appName: 'MRO Fulfillment Operations Advisor',
  link: 'https://moa.av.ge.com'
})

module.exports = startApp
