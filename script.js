document.addEventListener("DOMContentLoaded", function() {
    var navItem = document.getElementById("navitem");
    navItem.addEventListener("click", showAlert);

    function showAlert(event) {
      event.preventDefault();
      alert("This website is exploring what makes one stand out from others!");
    }
  });

  window.addEventListener('resize', function() {
    var box = document.querySelector('.box');
    var windowHeight = window.innerHeight;
    var thresholdHeight = 462; // Set the threshold height when the box should disappear
    
    if (windowHeight < thresholdHeight) {
      box.style.display = 'none';
    } else {
      box.style.display = 'block';
    }
  });
  
  // Initialize on page load
  window.addEventListener('load', function() {
    var box = document.querySelector('.box');
    var windowHeight = window.innerHeight;
    var thresholdHeight = 462; // Set the threshold height when the box should disappear
    
    if (windowHeight < thresholdHeight) {
      box.style.display = 'none';
    }
  });