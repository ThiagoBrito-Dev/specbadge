const Profile = require("../models/Profile");
const fetch = require("node-fetch");

module.exports = {
  async show(req, res) {
    const { path } = req.route;
    const accessToken = req.session.token;

    if (accessToken) {
      if (path == "/badge") {
        const userGitHubData = await fetch(`https://api.github.com/user`, {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }).then((res) => res.json());

        // the "message" property references the "Bad Credentials" message, which is returned
        // if an invalid token is passed to the above request.
        if (!userGitHubData.message) {
          const userProfileData = await Profile.get(userGitHubData.id);

          if (userProfileData) {
            return res.render("editable-badge", {
              gitHubData: userGitHubData,
              hasProfileData: true,
              profileData: userProfileData,
            });
          } else {
            return res.render("editable-badge", {
              gitHubData: userGitHubData,
              hasProfileData: false,
            });
          }
        }
      }
    } else if (path == "/") {
      return res.render("readable-badge", { hasData: false });
    }

    return res.redirect("/login");
  },
  async save(req, res) {
    const data = {
      github_id: Number(req.body.gitHubId),
      user: req.body.userName,
      event: req.body.eventName,
      links: {
        youtube: req.body.youtubeLink,
        instagram: req.body.instagramLink,
        facebook: req.body.facebookLink,
        twitter: req.body.twitterLink,
      },
    };
    const userProfile = await Profile.get(data.github_id);

    if (userProfile) {
      await Profile.update(data);
    } else {
      await Profile.create(data);
    }

    return res.redirect("/badge");
  },
};
