const getRandomCountry = async () => {
    //make api call
    try {
        const state = document.getElementById("searchinput").value;

        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);

        const allWeather = await weather.json()
        console.log(allWeather);
        const temp = allWeather.main.temp
        const feelsTemp = allWeather.main.feels_like
        const place = allWeather.name
        const country = allWeather.sys.country
        const humidity = allWeather.main.humidity
        const wind = allWeather.wind.speed
        const pressure = allWeather.main.pressure
        const timezone = allWeather.timezone
        console.log(pressure);

        // Your provided timezone offset in seconds (19800 seconds is GMT +05:30)
        const timezoneOffsetInSeconds = timezone;

        // Get the current UTC time in milliseconds
        const currentUTCTime = Date.now();

        // Calculate the local time by adding the timezone offset
        const localTime = new Date(currentUTCTime + timezoneOffsetInSeconds * 1000);

        // Format the date according to the desired format
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        const formattedTime = localTime.toLocaleString('en-US', options);

        



        result.innerHTML = ` <div class="img">
        <img src="https://pluspng.com/img-png/parachute-png-hd-sonoma-star-800-png-614.png"
          width="100px">
      </div>
        <div class="d-flex flex-column text-center mt-5 mb-4 contents data">
                  <h6 class="display-4 mb-0 font-weight-bold" style="color: #fff;">${temp}</h6>
                  <span class="small" style="color: #fff">${place}</span>
                </div>
    
                <div class="d-flex align-items-center contents data">
                  <div class="flex-grow-1" style="font-size: 1rem;">
                    <div><i class="fas fa-wind fa-fw" style="color: rgb(24, 24, 91) ;"></i> <span class="ms-1">country: ${country}
                      </span></div>
                    <div><i class="fas fa-tint fa-fw" style="color:  rgb(24, 24, 91);"></i> <span class="ms-1"> feels like: ${feelsTemp} </span>
                    </div>
                    <div><i class="fas fa-sun fa-fw" style="color: rgb(24, 24, 91);"></i> <span class="ms-1"> humidity: ${humidity}</span>
                    </div>
                    <div><i class="fas fa-sun fa-fw" style="color: rgb(24, 24, 91);"></i> <span class="ms-1">wind: ${wind}</span>
                    </div>
                    <div><i class="fas fa-sun fa-fw" style="color:  rgb(24, 24, 91);"></i> <span class="ms-1"> pressure: ${pressure}</span>
                    </div>
                    <div><i class="far fa-clock fa-fw" style="color:  rgb(24, 24, 91);"></i> <span class="ms-1">${formattedTime}</span></div>

                  </div>
                  
                </div>
        
        `
    }
    catch (err) {
        console.log(err);
    }
}