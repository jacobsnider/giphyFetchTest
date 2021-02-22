// let random = random() => [~~(Math.random() * random().length)];

const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "dc6zaTOxFJmzC",
    tag: `It's Always Sunny In Philadelphia`,
    // type: "random",
};

const url = `${giphy.baseURL}search?q=${giphy.tag}&api_key=${giphy.apiKey}`;

fetch(url)
    .then(res => res.json())
    .then(json => {
        let giphyResults = json.data
            // Target for giphyResults -> [0].images.fixed_height.url
        let random = giphyResults[~~(Math.random() * giphyResults.length)];
        console.log(random);
        const resultsDiv = document.querySelector('.card')
        let results = `
        <img src="${random.images.fixed_height.url}" alt="Giphy Response">
        <button style="color: #000;">GET NEW GIF</button>
        `
        resultsDiv.innerHTML = results;
    });
// .catch(err => console.log(err.message))


// -------------------
// HELPER FUNCTIONS
// -------------------