// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Create an Audio object for the sound file
  var audio = new Audio('SFX/rclick-13693.mp3');

  // Attach a click event listener to the 'submitButton'
  document.getElementById('submitButton').addEventListener('click', function() {
      // Play the audio when the button is clicked
      audio.play();
  });
});