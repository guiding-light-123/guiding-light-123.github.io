document.addEventListener("DOMContentLoaded", function() {

  // Step 1: find the button and the empty paragraph by their id
  let btn = document.getElementById("greetBtn");
  let msg = document.getElementById("greetMsg");

  // Step 2: listen for a click on the button
  btn.addEventListener("click", function() {
    // Step 3: when clicked, put text into the paragraph
    msg.textContent = "Hello! Welcome to my portfolio!";
    msg.style.color = "#2980b9";
    msg.style.fontWeight = "bold";
  });

  let toggleBtn = document.getElementById("toggleBtn");
  let extraInfo = document.getElementById("extraInfo");

  toggleBtn.addEventListener("click", function() {
    if (extraInfo.style.display === "none") {
      extraInfo.style.display = "block";
      toggleBtn.textContent = "Show Less";
    } else {
      extraInfo.style.display = "none";
      toggleBtn.textContent = "Show More About Me";
    }
  });

});
