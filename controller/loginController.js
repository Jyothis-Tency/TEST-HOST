const renderLogin = async (req, res) => {
  try {
    res.render("login.ejs");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderLogin };
