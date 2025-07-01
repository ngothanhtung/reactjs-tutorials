document.getElementById('myButton').addEventListener('click', function () {
  alert('Button clicked!');
});

document.getElementById('myButton').addEventListener('click', function (event) {
  console.log(event.target); // Logs the clicked element
});

form.addEventListener('submit', function (event) {
  // Check if the form is valid
  if (!form.checkValidity()) {
    event.preventDefault();
    alert('Form submission prevented!');
  }
});

// Removing an Event Listener
function showMessage() {
  alert('Event triggered!');
}

document.getElementById('myButton').addEventListener('click', showMessage);
// To remove it:
document.getElementById('myButton').removeEventListener('click', showMessage);
