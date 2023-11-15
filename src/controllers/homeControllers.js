let getHomePage = (req, res) => {
  res.send("Home Page,welcome!");
};

let getHomeAbout = (req, res) => {
  res.send("Home Page About!");
};

module.exports = {
  getHomePage,
  getHomeAbout,
};
