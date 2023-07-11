// Select all the drum buttons
var drumButtons = document.querySelectorAll('.drum');

// Loop through each drum button and attach the event listener
drumButtons.forEach(function(button) {
  button.addEventListener('click', handleClick);
});

// Event handler function
function handleClick(event) {
  var button = event.target;
  var audio = button.nextElementSibling;

  // Reset the audio to the beginning and play the sound
  if (audio instanceof HTMLAudioElement) {
    audio.currentTime = 0;
    audio.play();
  }
}
