// const fetch = require('node-fetch');

const card = document.querySelector('.card');
const img = card.querySelector('img');
const btn = card.querySelector('button');
var giphyResults;
var gifUrl;
var gifTitle;


const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "dc6zaTOxFJmzC",
    tag: `It's Always Sunny In Philadelphia`,
    // type: "random",
};
// API URL -> https://api.giphy.com/v1/gifs/search?q=It%27s%20Always%20Sunny%20In%20Philadelphia&api_key=dc6zaTOxFJmzC
const url = `${giphy.baseURL}search?q=${giphy.tag}&api_key=${giphy.apiKey}`;

// -------------------
// FETCH FUNCTIONS -> fetch data from an api and parse the response to JSON
// -------------------

function fetchData(url) {
    return fetch(url)
        .then(res => res.json())
}
fetchData(url)
    .then(json => {
        giphyResults = generateGif(json.data);
        gifUrl = randomGif(giphyResults);
        displayGif(gifUrl);
    })

// -------------------
// HELPER FUNCTIONS
// -------------------
// Recieve json & select random url from response array
function generateGif(json) {
    let giphyResults = json;
    console.log(giphyResults);
    return giphyResults;
}

function randomGif(giphyResults) {
    let random = giphyResults[~~(Math.random() * giphyResults.length)];
    gifUrl = random.images.original.url;
    gifTitle = random.title;
    console.log(gifUrl);
    return gifUrl;
}

function displayGif(gifUrl) {
    const html = `
                <img src="${gifUrl}" alt="${gifTitle}">
                <button style="color: #000;">GET NEW GIF</button>
                `;
    card.innerHTML = html;
}

function fetchNewGif(gifUrl) {
    var newGif = img.src(gifUrl);
    fetchData(gifUrl)
        .then(data => {
            img.src = `${gifUrl}`;
            img.alt = `${gifTitle}`;
        })
}

// --------------- 
// EVENT LISTENERS
// ---------------

// onSelect.addEventListener('change', fetchNewGif);
// btn.addEventListener('click', fetchNewGif)