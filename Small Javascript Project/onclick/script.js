const colorButton = document.getElementById('color-button');
const text = document.getElementById('text');

colorButton.addEventListener('click', function() {
  if (text.style.color === 'black') {
    text.style.color = 'red';
  } else {
    text.style.color = 'black';
  }
});
