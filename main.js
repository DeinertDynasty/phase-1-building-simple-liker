// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Get the heart and error modal elements
const heart = document.querySelector(".heart");
const errorModal = document.querySelector(".error-modal");

// Initially hide the error modal
errorModal.classList.add("hidden");

// Add a click event listener to the heart
heart.addEventListener("click", () => {
  // Invoke the mimicServerCall function
  mimicServerCall()
    .then(() => {
      // On success, toggle the heart and activated-heart classes
      heart.classList.toggle("heart");
      heart.classList.toggle("activated-heart");
    })
    .catch((error) => {
      // On failure, display the error modal with the error message
      errorModal.classList.remove("hidden");
      errorModal.innerText = error;

   
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
