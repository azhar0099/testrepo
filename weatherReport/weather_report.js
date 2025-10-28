function showWeatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value;
    const apiKey = '50dfed74ad9af09be072fcdcd1e83168';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
  