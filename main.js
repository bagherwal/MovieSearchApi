const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit', async (e) => { // Add async here
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);

    // if(query=""){
    //     query="marvel";
    // }

    await tvMazeApi(query); // Add await here
});

async function tvMazeApi(query) { // Add async here
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    
    makeImages(movies);
}

function makeImages(movies) {
    for (let movie of movies) {
        let image = movie.show.image?.medium; // Add optional chaining to avoid errors if image is null

        if (image) { // Check if image is not null
            const img = document.createElement('img');
            img.src = image; // Use the correct variable

            container.appendChild(img);
        }
    }
}
