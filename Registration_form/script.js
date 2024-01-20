const form = document.querySelector('form');
const materialInputs = form.querySelectorAll('.material-input > input');

function materialize() {
  this.parentElement.classList.add('materialize');
}

function dematerialize() {
  if (this.value === '')
  this.parentElement.classList.remove('materialize');
}

materialInputs.forEach(input => {
  input.addEventListener("focus", materialize);
  input.addEventListener("blur", dematerialize);
});