let randomAdice = [];

function getRandomAdvice () {
fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => console.log(data.slip.advice));

}

getRandomAdvice ();
console.log(data);

function showAdice () {
    document.getElementById("hello").innerHTML = getRandomAdvice;
}