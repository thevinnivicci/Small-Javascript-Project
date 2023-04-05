const input = document.getElementById('input');
const text = document.getElementById('text');

input.addEventListener('keypress', function(event) {
  text.textContent = event.target.value;
});
