const API_KEY = 'api_key=63d7f59d84299836ce2303a0a89a6f69';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const searchURL = BASE_URL + '/search/movie?'+API_KEY; 


const main = document.getElementById('main');
const form = document.getElementById('form');

const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res =>res.json()).then(data =>{
        console.log(data.results);

        showMovies(data.results);
    })
}


function showMovies(data) {

    main.innerHTML = '';
        
    data.forEach(movie =>{
        const{title, poster_path, vote_average, overview, release_date} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}" />

        <div class="movie-info">
        <div class="group">
          <h3>${title}</h3>
          <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>

        <h5>${release_date}</h5>
        </div>

        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
        `

        main.appendChild(movieEl);
    })
}

function getcolor(vote) {

    if(vote>= 8){
        return 'green'
    }else if(vote>= 5){
        return 'red'
    }
     
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchterm = search.value;

    if(searchterm) {
        getMovies(searchURL+'&query='+searchterm)
    }else{
        getMovies(API_URL);
    }
})