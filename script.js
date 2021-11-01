const socialMediaLinks = {
  github: "trybrito",
  youtube: "rocketseat",
  instagram: "trybrito",
  facebook: "rocketseat",
  twitter: "trybrito",
};

function changeSocialMediaLinks() {
  const listItems = socialLinks.children;

  for (let item of listItems) {
    const socialMedia = item.getAttribute("class");
    const link = item.children[0];

    link.href = `https://${socialMedia}.com/${socialMediaLinks[socialMedia]}`;
  }
}

function getUserGitHubProfileInfo() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userImage.src = data.avatar_url;
      userName.textContent = data.name;
      profileLink.href = data.html_url;
      gitHubUser.textContent = data.login;
      userBiography.textContent = data.bio;
    });
}

changeSocialMediaLinks();
getUserGitHubProfileInfo();
