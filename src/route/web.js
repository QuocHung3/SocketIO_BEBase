const express = require("express");
const homeControllers = require("../controllers/homeControllers");

let router = express.Router();

let initWebRoutes = (app) => {
  app.get("/", homeControllers.getHomePage);
  app.get("/about", homeControllers.getHomeAbout);

  return app.use("/", router);
};

module.exports = initWebRoutes;
