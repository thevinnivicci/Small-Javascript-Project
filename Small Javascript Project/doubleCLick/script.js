const colorButton = document.getElementById('color-button');
const body = document.body;

colorButton.addEventListener('dblclick', function() {
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = '#f2f2f2';
  } else {
    body.style.backgroundColor = 'blue';
  }
});
