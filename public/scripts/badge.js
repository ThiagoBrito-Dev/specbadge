editBadge.addEventListener("click", toggleEditModalState);
cancelEdit.addEventListener("click", toggleEditModalState);
shareBadge.addEventListener("click", toggleShareModalState);
cancelSharing.addEventListener("click", toggleShareModalState);
copyButton.addEventListener("click", copyBadgeLinkToClipboard);

let lastFocusedElement;

function handleModalFocus(modal) {
  if (modal.classList.value.includes("active")) {
    lastFocusedElement = document.activeElement;
    modal.focus();

    return;
  }

  lastFocusedElement.focus();
}

function resetCopyButtonState() {
  if (copyButton.classList.value.includes("active")) {
    copyButton.classList.remove("active");
  }
}

function handleModalListeners(modal) {
  if (modal.classList.value.includes("active")) {
    document.body.onkeydown = (event) => {
      createFocusTrap(event);
      closeModalOnEscape(event, modal);
    };
  } else {
    document.body.onkeydown = null;
  }
}

function toggleEditModalState() {
  modalOverlay.classList.toggle("active");
  modalEdit.classList.toggle("active");

  handleModalFocus(modalEdit);
  handleModalListeners(modalEdit);
}

function toggleShareModalState() {
  modalOverlay.classList.toggle("active");
  modalShare.classList.toggle("active");

  handleModalFocus(modalShare);
  resetCopyButtonState();
  handleModalListeners(modalShare);
}

function copyBadgeLinkToClipboard() {
  const copyInput = copyButton.previousElementSibling;

  if (copyInput.value.includes("http")) {
    navigator.clipboard.writeText(copyInput.value);
    copyButton.classList.add("active");
  }
}

function createFocusTrap(event) {
  if (event.key == "Tab") {
    const focusedElementId = document.activeElement.getAttribute("id");

    if (event.shiftKey) {
      if (
        focusedElementId.includes("modal") ||
        focusedElementId == "eventName" ||
        focusedElementId == "shareLink"
      ) {
        event.preventDefault();
      }
    } else {
      if (
        focusedElementId == "saveEdit" ||
        focusedElementId == "cancelSharing"
      ) {
        event.preventDefault();
      }
    }
  }
}

function closeModalOnEscape({ key }, modal) {
  if (key == "Escape") {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active");

    resetCopyButtonState();
  }
}
