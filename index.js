const express = require("express");
const app = express();
const port = 8080;

function startApp({ pageTitle, appName }) {
  app.set('views', './views')
  app.set("view engine", "pug");
  app.get("/index.html", (req, res) => {
    res.render("index", { pageTitle, appName });
  });

  app.get("*", (req, res) => res.redirect("/index.html"));

  app.listen(port, () => console.log(`App listening on port: ${port}`));
}

module.exports = startApp
