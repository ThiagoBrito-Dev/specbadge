function toggleEditModalState() {
  modalOverlay.classList.toggle("active");
  modalEdit.classList.toggle("active");
}

function toggleShareModalState() {
  modalOverlay.classList.toggle("active");
  modalShare.classList.toggle("active");

  copyButton.classList.value.includes("active") &&
    copyButton.classList.remove("active");
}

editBadge.addEventListener("click", toggleEditModalState);
cancelEdit.addEventListener("click", toggleEditModalState);

shareBadge.addEventListener("click", toggleShareModalState);
cancelSharing.addEventListener("click", toggleShareModalState);

copyButton.addEventListener("click", () => {
  const copyInput = copyButton.previousElementSibling;
  navigator.clipboard.writeText(copyInput.value);

  copyButton.classList.add("active");
});
