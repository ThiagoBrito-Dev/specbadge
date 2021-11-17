const fetch = require("node-fetch");

module.exports = {
  async show(req, res) {
    if (req.session.token) {
      return res.redirect("/badge");
    }

    const { CLIENT_ID, CLIENT_SECRET } = process.env;
    const tempCode = req.query.code;

    if (tempCode) {
      const postData = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: tempCode,
      };

      const result = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(postData),
        }
      ).then((res) => res.json());

      if (!result.error) {
        req.session.token = result["access_token"];
        return res.redirect(`/badge`);
      }
    }

    return res.render("login", { clientId: process.env.CLIENT_ID });
  },
};
