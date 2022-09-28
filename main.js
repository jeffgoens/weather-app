const apiKey = '31b7dec44d4017661c9be2f158f9ae70';


async function getWeatherData() {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=${apiKey}&units=imperial`);
        console.log(response.data);
        // const weatherData = response.data;
    } catch (error) {
        console.error(error);
    }
}

getWeatherData();

function initPage () {
    let headerText = document.createElement('h1');
    headerText.innerText = 'Weather App';
    document.body.appendChild(headerText);
    headerText.id = 'headerId';

    let zipcodeInput = document.createElement('input');
    zipcodeInput.placeholder = 'Enter 5-digit zipcode';
    document.body.appendChild(zipcodeInput);
    zipcodeInput.id = 'zipcodeId';

    let weatherButton = document.createElement('button');
    weatherButton.innerHTML = "Get Weather";
    document.body.appendChild(weatherButton);

}

initPage();

// document.body.onload = addElement;
// function addElement () {
//     const newHeader = document.createElement("h1");
//     const headerContent = document.createTextNode("Weather App");
//     newHeader.appendChild(headerContent);
//     const currentHeader = document.getElementById("main");
//     document.body.insertBefore(newHeader, currentHeader);

//     const newInput = document.createElement('input');
//     const inputContent = document.createTextNode("zipcode")
//     newInput.appendChild(inputContent);
//     const currentInput = document.getElementById("main");
//     document.body.insertBefore(newInput, currentInput);

    
    





