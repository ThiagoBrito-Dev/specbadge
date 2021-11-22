module.exports = {
  show(req, res) {
    if (req.session.token) {
      return res.redirect("/badge");
    }

    return res.render("index", { hasData: false });
  },
};
