const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.get("/", function (req, res, next) {
  const isAuth = req.isAuthenticated();
  knex("articles")
    .select("*")
    .then(function (results) {
      res.render("index", {
        title: "miniBlog",
        articles: results,
        isAuth: isAuth,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.render("index", {
        title: "miniBlog",
        isAuth: isAuth,
      });
    });
});

router.post("/", function (req, res, next) {
  const isAuth = req.isAuthenticated();
  const title = req.body.title;
  const text = req.body.contents;
  const time = new Date().toLocaleString("sv-SE");

  knex("articles")
    .insert({ user_id: req.user.id, title: title, content: text, time: time })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (err) {
      console.error(err);
      res.render("index", {
        title: "miniBlog",
        isAuth: isAuth,
      });
    });
});

router.use("/signup", require("./signup"));
router.use("/signin", require("./signin"));
router.use("/logout", require("./logout"));

module.exports = router;