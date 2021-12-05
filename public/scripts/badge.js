let lastFocusedElement;

function handleModalFocus(modal) {
  if (modal.classList.value.includes("active")) {
    lastFocusedElement = document.activeElement;
    modal.focus();

    return;
  }

  lastFocusedElement.focus();
}

function toggleEditModalState() {
  modalOverlay.classList.toggle("active");
  modalEdit.classList.toggle("active");

  handleModalFocus(modalEdit);
}

function toggleShareModalState() {
  modalOverlay.classList.toggle("active");
  modalShare.classList.toggle("active");

  if (copyButton.classList.value.includes("active")) {
    copyButton.classList.remove("active");
  }

  handleModalFocus(modalShare);
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
