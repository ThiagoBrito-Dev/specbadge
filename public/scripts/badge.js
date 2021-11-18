function toggleModalState() {
  modalOverlay.classList.toggle("active");
}

function updateBadgeInfo(event) {
  event.preventDefault();

  const inputs = formEdit.querySelectorAll(".input");
  const containers = configWrapper.querySelectorAll(".social-link-container");
  const values = [];

  for (let index = 0; index < inputs.length; index++) {
    const { value } = inputs[index];
    values.push(value);

    if (index === 0) {
      const pageTitle = document.querySelector("head title");
      pageTitle.textContent += ` - ${value}`;
      continue;
    }

    const container = containers[index - 1];
    const socialMedia = container.getAttribute("data-media");
    const link = container.children[0];

    link.href = `https://${socialMedia}.com/${value}`;
    link.target = "_blank";
  }

  const badgeInfo = {
    title: values[0],
    youtube: values[1],
    instagram: values[2],
    facebook: values[3],
    twitter: values[4],
  };
  localStorage.setItem("specbadge:badgeInfo", JSON.stringify(badgeInfo));
}

function getBadgeInfo(badgeInfo) {
  badgeInfo = JSON.parse(badgeInfo);

  const pageTitle = document.querySelector("head title");
  pageTitle.textContent += ` - ${badgeInfo.title}`;

  const inputs = formEdit.querySelectorAll(".input");
  const containers = configWrapper.querySelectorAll(".social-link-container");

  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];

    if (index === 0) {
      input.value = badgeInfo.title;
      continue;
    }

    const container = containers[index - 1];
    const socialMedia = container.getAttribute("data-media");
    const link = container.children[0];

    input.value = badgeInfo[socialMedia];
    link.href = `https://${socialMedia}.com/${badgeInfo[socialMedia]}`;
    link.target = "_blank";
  }
}

const badgeInfo = localStorage.getItem("specbadge:badgeInfo");
badgeInfo && getBadgeInfo(badgeInfo);

editBadge.addEventListener("click", toggleModalState);
cancelButton.addEventListener("click", toggleModalState);
saveButton.addEventListener("click", toggleModalState);
formEdit.addEventListener("submit", updateBadgeInfo);
