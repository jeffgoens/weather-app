const theButton = document.getElementById('myButton')

async function getRandomAdvice(url) {
    try {
        const response = await axios.get(url);
        const fact1 = response.data.slip.advice;
        document.getElementById("hello").innerHTML = fact1;
    } catch (error) {
        console.error(error);
    }

}

getRandomAdvice('https://api.adviceslip.com/advice');

theButton.addEventListener('click', () => {
    fact1   
    contentBlock.innerText = data.slip.advice;
})









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
