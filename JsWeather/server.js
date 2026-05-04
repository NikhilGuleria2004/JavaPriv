const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "9d4c7d0e54e448cafa6fdb26ee891b96"

weatherForm.addEventListener('submit', async event =>{
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    } 
    else{
        displayError("Please Enter a City");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather Data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const  {name:city, 
            main:{temp, humidity}, 
            weather:[{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp}°C`; 
    humidityDisplay.textContent = `Humidity: ${humidity}`;

    cityDisplay.classList.add("CityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
}

function getWeatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display="flex";
    card.appendChild(errorDisplay);

}