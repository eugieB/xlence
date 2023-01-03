// select element with id "button"
const button = document.querySelector('#button');

// add click event listener to button
button.addEventListener('click', () => {
  // select element with id "modal"
  const modal = document.querySelector('#modal');
  // toggle class "open" on modal
  modal.classList.toggle('open');
});

// select element with id "close"
const close = document.querySelector('#close');

// add click event listener to close button
close.addEventListener('click', () => {
  // select element with id "modal"
  const modal = document.querySelector('#modal');
  // remove class "open" from modal
  modal.classList.remove('open');
});
