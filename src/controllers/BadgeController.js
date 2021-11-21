const fetch = require("node-fetch");
const Profile = require("../models/Profile");

module.exports = {
  async show(req, res) {
    const accessToken = req.session.token;

    if (accessToken) {
      const userData = await fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }).then((res) => res.json());

      // the "message" property references the "Bad Credentials" message, which is returned
      // if an invalid token is passed to the above request.
      if (!userData.message) {
        const userProfile = await Profile.get(userData.login);

        if (userProfile) {
          return res.render("badge", {
            data: userData,
            hasProfile: true,
            profile: userProfile,
          });
        } else {
          return res.render("badge", {
            data: userData,
            hasProfile: false,
          });
        }
      }
    }

    return res.redirect("/login");
  },
  async save(req, res) {
    const data = {
      user: req.body.userName,
      event: req.body.eventName,
      links: {
        youtube: req.body.youtubeLink,
        instagram: req.body.instagramLink,
        facebook: req.body.facebookLink,
        twitter: req.body.twitterLink,
      },
    };
    const userProfile = await Profile.get(data.user);

    if (userProfile) {
      await Profile.update(data);
    } else {
      await Profile.create(data);
    }

    return res.redirect("/badge");
  },
};
