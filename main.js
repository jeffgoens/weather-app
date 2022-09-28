const apiKey = '31b7dec44d4017661c9be2f158f9ae70';


async function getWeatherData() {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=${apikey}`);
        console.log(response.data.results);
        const weatherData = response.data.results;
    }
}

// const theButton = document.getElementById('myButton')

// async function getRandomAdvice(url) {
//     try {
//         const response = await axios.get(url);
//         const fact1 = response.data.slip.advice;
//         document.getElementById("hello").innerHTML = fact1;
//     } catch (error) {
//         console.error(error);
//     }

// }

// getRandomAdvice('https://api.adviceslip.com/advice');

// theButton.addEventListener('click', () => {
//     fact1   
//     contentBlock.innerText = data.slip.advice;
// })









// function getRandomAdvice () {
// fetch('https://api.adviceslip.com/advice')
//     .then((response) => response.json())
//     // .then((data) => console.log(data.slip.advice));
//     .then((data) => {
//         let fact1 = data.slip.advice;
//         console.log(fact1);
//         document.getElementById("hello").innerHTML = fact1
//     } )

// }

// getRandomAdvice ();
