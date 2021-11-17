const fetch = require("node-fetch");

module.exports = {
  async show(req, res) {
    const accessToken = req.session.token;

    if (accessToken) {
      const userData = await fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }).then((res) => res.json());

      if (!userData.message) {
        // the "message" property references the "Bad Credentials" message, which is returned if an invalid token is passed to the above request.
        return res.render("badge", { data: userData });
      }
    }

    return res.redirect("/login");
  },
};
