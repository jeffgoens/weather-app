let randomAdice = [];

function getRandomAdvice () {
fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => console.log(data));

}

getRandomAdvice ();
