const API_KEY = 'api_key=63d7f59d84299836ce2303a0a89a6f69';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res =>res.json()).then(data =>{
        console.log(data.results);

        showMovies(data.results);
    })
}


function showMovies(data) {
        
    data.foreach(movie =>{
        const{title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}" />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
        `
    })
}

function getcolor(vote) {

    if(vote)
     
}