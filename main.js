const apiKey = '31b7dec44d4017661c9be2f158f9ae70';
document.getElementById("mainHeader").style = mainHeader;
document.getElementById("zipcodeInput").style = zipcodeInput;
let getWeatherButton = document.getElementById("getWeather");
let cityText = document.getElementById("cityText");
let temperatureText = document.getElementById("temperatureText");
let kelvinText = document.getElementById("kelvin");
let fahreneheitText = document.getElementById("fahrenheit");
let celsiusText = document.getElementById("celsius");
let currentCondition = document.getElementById("currentCondition");
let conditions = document.getElementById("conditions");
let imageIcon = document.getElementById("image");



const zipcodeValidation = function () {                                      // function that validates the zipcode string value and if not valid, returns an alert
    zipcode = document.getElementById("zipcodeInput").value;
    if (zipcode.length === 5 && isNaN(zipcode) === false) {
        console.log("valid zip string")
        return true;
    } else {
        console.log("invalid zip");
        alert("You have entered an INVALID ZIPCODE. Please try again.")
    }
};


async function getWeatherData() {                                             // function that calls the API data, returns error message if zipcode is not valid(found), populates current state              
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=imperial`);
        console.log(response.data);
        let data = response.data;
        currentState(data)
    } catch {
        alert("You have entered an INVALID ZIPCODE. Please try again.")
        console.error(error);
    }
}


getWeatherButton.addEventListener("click", () => {                            // add event listener that runs the zipcodeValidation function and if it passes, 
    if (zipcodeValidation()) {                                                // runs the getWeatherData function API call
        getWeatherData();
    }
});


const currentState = function (data) {                                        // function that updates the current state of the display
    let temperature = Math.round(data.main.temp);
    let city = data.name;
    let celsius = Math.round((temperature - 32) / 1.8);
    let kelvin = Math.round(celsius + 273.15);
    let condition = data.weather[0].description;
    let icon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

    cityText.textContent = city;
    conditions.textContent = condition;
    kelvinText.textContent = `${kelvin} °K`;
    fahreneheitText.textContent = `${temperature} °F`;
    celsiusText.textContent = `${celsius} °C`;
    imageIcon.innerHTML = `<img src = "${iconUrl}"/>`;

};

document.getElementById("zipcodeInput").addEventListener("click", () => {      // function that clears the zipcode field when clicked inside input box
    zipcodeInput.value = ""

});