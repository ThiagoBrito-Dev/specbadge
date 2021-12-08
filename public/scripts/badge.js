let lastFocusedElement;

function handleModalFocus(modal) {
  if (modal.classList.value.includes("active")) {
    lastFocusedElement = document.activeElement;
    modal.focus();

    return;
  }

  lastFocusedElement.focus();
}

function createKeyboardTrap(event) {
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

function toggleEditModalState() {
  modalOverlay.classList.toggle("active");
  modalEdit.classList.toggle("active");

  if (modalEdit.classList.value.includes("active")) {
    document.body.addEventListener("keydown", createKeyboardTrap, false);
    // According to MDN, useCapture is mandatory in some browsers, so I've explicitly set
    // it for accessibility reasons.
  } else {
    document.body.removeEventListener("keydown", createKeyboardTrap, false);
  }

  handleModalFocus(modalEdit);
}

function toggleShareModalState() {
  modalOverlay.classList.toggle("active");
  modalShare.classList.toggle("active");

  if (modalShare.classList.value.includes("active")) {
    document.body.addEventListener("keydown", createKeyboardTrap, false);
  } else {
    document.body.removeEventListener("keydown", createKeyboardTrap, false);
  }

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
