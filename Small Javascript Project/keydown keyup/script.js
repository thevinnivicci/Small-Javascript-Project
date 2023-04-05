const text = document.getElementById('text');

document.addEventListener('keydown', function(event) {
  document.body.style.backgroundColor = 'red';
  text.textContent = 'Key pressed: ' + event.key;
});

document.addEventListener('keyup', function(event) {
  document.body.style.backgroundColor = '#f2f2f2';
  text.textContent = 'Press and hold a key.';
});
