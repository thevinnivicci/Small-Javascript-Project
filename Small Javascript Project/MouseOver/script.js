const colorButton = document.getElementById('color-button');
const text = document.getElementById('text');

colorButton.addEventListener('mouseover', function() {
  text.style.color = 'red';
});

colorButton.addEventListener('mouseout', function() {
  text.style.color = 'black';
});
