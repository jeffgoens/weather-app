let randomAdice = [];

function getRandomAdvice () {
fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    // .then((data) => console.log(data.slip.advice));
    .then((data) => {
        let fact1 = data.slip.advice;
        console.log(fact1);
        document.getElementById("hello").innerHTML = fact1
    } )

}

getRandomAdvice ();
// console.log(data);

// function showAdice () {
//     document.getElementById("hello").innerHTML = getRandomAdvice ();
// }