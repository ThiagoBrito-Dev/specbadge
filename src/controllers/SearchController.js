const Profile = require("../models/Profile");
const fetch = require("node-fetch");

module.exports = {
  async show(req, res) {
    const { user } = req.params;
    const userProfileData = await Profile.get(user, true);

    if (userProfileData) {
      const userGitHubData = await fetch(
        `https://api.github.com/users/${user}`
      ).then((res) => res.json());

      if (userGitHubData.id === userProfileData.github_id) {
        return res.render("readable-badge", {
          hasData: true,
          gitHubData: userGitHubData,
          profileData: userProfileData,
        });
      }
    }

    return res.render("error");
  },
};
