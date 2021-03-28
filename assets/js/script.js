function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then((response) => response.json())
    .then((data) => randomJoke(data))
    .catch(function (error) {
      alert('Oops! Something went wrong, please try again.');
     }); 
}

// get button that opens the jokes
const jokesBtn = document
  .getElementById('jokesBtn')
  .addEventListener('click', getJoke);

// write function that is called when fetching the api data
function randomJoke(jokeData) {
  let jokesDiv = document.getElementById('jokesDiv');
  if (jokeData.type === "single") {
    jokesDiv.innerHTML = `<h3 class="modal-title">${jokeData.joke}</h3>`;
  } else {
    jokesDiv.innerHTML = `<h3>${jokeData.setup}</h3>
        <h4>${jokeData.delivery}</h4>`;
  }
}