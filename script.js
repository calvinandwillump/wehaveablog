document.addEventListener("DOMContentLoaded", function() {
  var navItem = document.getElementById("navitem");
  navItem.addEventListener("click", showAlert);

  function showAlert(event) {
    event.preventDefault();
    alert("yeah we have a blog");
  }

  window.addEventListener('resize', function() {
    var box = document.querySelector('.box');
    var windowHeight = window.innerHeight;
    var thresholdHeight = 556;

    if (windowHeight < thresholdHeight) {
      box.style.display = 'none';
    } else {
      box.style.display = 'block';
    }
  });

  window.addEventListener('load', function() {
    var box = document.querySelector('.box');
    var windowHeight = window.innerHeight;
    var thresholdHeight = 556;

    if (windowHeight < thresholdHeight) {
      box.style.display = 'none';
    }
  });

  const apiKey = '3fb38fbee53d4aa8822163545231312';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip`;

  function fetchWeatherData() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        if (!data.location || !data.current) {
          throw new Error('Invalid API response format');
        }

        const location = data.location.country;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;

        document.getElementById('location').textContent = location;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('condition').textContent = condition;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  fetchWeatherData();

  function updateDate() {
    var currentDate = new Date();

    var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('date').innerHTML = formattedDate;
  }

  updateDate();
});
