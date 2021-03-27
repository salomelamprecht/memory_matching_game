function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then((response) => response.json())
    .then((data) => randomJoke(data))
    .catch(function (error) {
      alert('Oops! Something went wrong, please try again.');
     }); 
}

const jokesBtn = document
  .getElementById('jokesBtn')
  .addEventListener('click', getJoke);

function randomJoke(jokeData) {
  console.log(jokeData);
  let jokesDiv = document.getElementById('jokesDiv');
  if (jokeData.type === "single") {
    jokesDiv.innerHTML = `<h2>${jokeData.joke}</h2>`;
  } else {
    jokesDiv.innerHTML = `<h2>${jokeData.setup}</h2>
        <h3>${jokeData.delivery}</h3>`;
  }
}