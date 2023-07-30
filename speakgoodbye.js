(function (window) {
    var byeSpeaker = {}; // Create an object to hold the 'goodbye' function
  
    var speakWord = "Good Bye"; // Define the word 'Good Bye'
  
    // Define the function that says 'Good Bye' to the given name
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    // Expose the 'byeSpeaker' object to the global scope
    window.byeSpeaker = byeSpeaker;
  })(window);
  