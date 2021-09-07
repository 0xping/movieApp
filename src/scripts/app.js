import "../styles/main.scss";

const arrowButtons = document.querySelectorAll(".btn-arrow");

arrowButtons.forEach((btn) => {
  const moviesBox = btn.closest(".movieList").querySelector(".movies");
  let scroll = moviesBox.getBoundingClientRect().width / 2;
  btn.addEventListener("click", () => {
    if (btn.classList.contains("right")) {
      moviesBox.scrollBy({
        left: scroll,
        behavior: "smooth",
      });
    } else {
      moviesBox.scrollBy({
        left: -scroll,
        behavior: "smooth",
      });
    }
  });
});

/******* */

const auth = "api_key=69dbec5271cc7d3bb6d05f72fb3b88e3";
const popularMovies = document.querySelector("#popularMovies .movies");
const popularTV = document.querySelector("#popularTV .movies");
const comedyMovies = document.querySelector("#comedyMovies .movies");
const fantasyMovies = document.querySelector("#fantasyMovies .movies");
const animationMovies = document.querySelector("#animationMovies .movies");
const romanceMovies = document.querySelector("#romanceMovies .movies");
const dramaMovies = document.querySelector("#dramaMovies .movies");
const horrorMovies = document.querySelector("#horrorMovies .movies");
const documentaryMovies = document.querySelector("#documentaryMovies .movies");

const fetchAPI = async (url) => {
  const data = await fetch(url + auth)
    .then((respond) => respond.json())
    .then((data) => data);
  return data;
};

const loader = document.querySelector(".loaderContainer");
const hideLoader = () => {
  loader.style.display = "none";
};

const getMovies = async (url, root) => {
  const data = await fetchAPI(url);
  data.results.forEach((movie) => {
    renderMovie(movie, root);
  });
};

const getTVShow = async (url, root) => {
  const data = await fetchAPI(url);
  data.results.forEach((TVShow) => {
    renderTVShow(TVShow, root);
  });
};

const renderMovie = (movie, root) => {
  const movieCard = `
  <a href="./movie?title=${movie.title.replace(/\s+/g, "")}&id=${
    movie.id
  }" class="movie_card">
  <div class="img">
  <img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    /></div>
    <div class="rate">
    <i class="fas fa-star"></i>
    <small>${movie.vote_average}</small>
    </div>
    <span class="title">${movie.title}</span>
    <span class="date">(${movie.release_date.substring(0, 4)})</span>
    </a>
    `;
  root.insertAdjacentHTML("beforeend", movieCard);
};

const renderTVShow = (TVShow, root) => {
  const TVCard = `
  <a href="./series?title=${TVShow.name.replace(/\s+/g, "")}&id=${
    TVShow.id
  }" class="movie_card">
  <div class="img"><img
    src="https://image.tmdb.org/t/p/w300${TVShow.poster_path}"
  /></div>
  <div class="rate">
    <i class="fas fa-star"></i>
    <small>${TVShow.vote_average}</small>
  </div>
  <span class="title">${TVShow.name}</span>
  <span class="date">(${TVShow.first_air_date.substring(0, 4)})</span>
</a>
  `;
  root.insertAdjacentHTML("beforeend", TVCard);
  hideLoader();
};

const form = document.querySelector(".search");
const search = (q) => {
  window.open(`./search?q=${q}`, "_self");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(form.querySelector("input").value.trim()!="") search(form.querySelector('input').value);
});

//discover/movie?sort_by=popularity.desc
//"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=69dbec5271cc7d3bb6d05f72fb3b88e3"

getMovies("https://api.themoviedb.org/3/movie/popular?", popularMovies);
getTVShow("https://api.themoviedb.org/3/tv/popular?", popularTV);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=35&",
  comedyMovies
);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=14&",
  fantasyMovies
);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=16&",
  animationMovies
);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=10749&",
  romanceMovies
);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=18&",
  dramaMovies
);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=27&",
  horrorMovies
);
getMovies(
  "https://api.themoviedb.org/3/discover/movie?with_genres=99&",
  documentaryMovies
);

/*

        "id": 28,
        "name": "Action"
    {
        "id": 12,
        "name": "Adventure"
    {
        "id": 16,
        "name": "Animation"
    {
        "id": 35,
        "name": "Comedy"
    {
        "id": 80,
        "name": "Crime"
    {
        "id": 99,
        "name": "Documentary"
    {
        "id": 18,
        "name": "Drama"
    {
        "id": 10751,
        "name": "Family"
    {
        "id": 14,
        "name": "Fantasy"
    {
        "id": 36,
        "name": "History"
    {
        "id": 27,
        "name": "Horror"
    {
        "id": 10402,
        "name": "Music"
    {
        "id": 9648,
        "name": "Mystery"
    {
        "id": 10749,
        "name": "Romance"
    {
        "id": 878,
        "name": "Science Fiction"
    {
        "id": 10770,
        "name": "TV Movie"
    {
        "id": 53,
        "name": "Thriller"
    {
        "id": 10752,
        "name": "War"
    {
        "id": 37,
        "name": "Western"
    }






*/
