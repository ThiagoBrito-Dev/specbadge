function toggleModalState() {
  modalOverlay.classList.toggle("active");
}

editBadge.addEventListener("click", toggleModalState);
cancelButton.addEventListener("click", toggleModalState);
saveButton.addEventListener("click", toggleModalState);
