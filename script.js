// Basic validation for the contact form
// Work completed by both contributors across selection, checking and messaging
// Authors: Moussa Toure & Nile Khan

document.addEventListener('DOMContentLoaded', () => {

  // Select the form used for all validation checks (Moussa Toure)
  const form = document.querySelector('.form-area');

  // Area where feedback messages are written after checks (Nile Khan)
  const messageContainer = document.getElementById('msg-box');

  // Stop script if no form exists on the current page (Moussa Toure)
  if (!form) {
    return;
  }
});
