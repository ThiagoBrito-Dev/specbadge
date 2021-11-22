const Profile = require("../models/Profile");
const fetch = require("node-fetch");

module.exports = {
  async show(req, res) {
    const { user } = req.params;
    const userProfile = await Profile.get(user, true);

    if (userProfile) {
      const userData = await fetch(`https://api.github.com/users/${user}`).then(
        (res) => res.json()
      );

      if (userData.id === userProfile.github_id) {
        return res.render("index", {
          hasData: true,
          data: userData,
          profile: userProfile,
        });
      }
    }

    return res.redirect("/");
  },
};
