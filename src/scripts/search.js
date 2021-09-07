import "../styles/main.scss";

const auth = "api_key=69dbec5271cc7d3bb6d05f72fb3b88e3";
let page = 1;
const urlParams = new URLSearchParams(window.location.search);
const pageLoader = document.querySelector(".loaderContainer");
const searchLoader = document.querySelector(".SearchContent .loaderContainer");
const q = urlParams.get("q");
const content = document.querySelector(".content .SearchContent .result");
const moreBtn = document.querySelector(".content .btn");
const notfound = document.querySelector(".notfound");

const form = document.querySelector(".search");
const search = (q) => {
  window.open(`./search?q=${q}`, "_self");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.querySelector("input").value);
  if (form.querySelector("input").value.trim() != "")
    search(form.querySelector("input").value);
});

const fetchAPI = async (url) => {
  const data = await fetch(url + auth)
    .then((respond) => respond.json())
    .then((data) => data);
  return data;
};

const loader = (el, display) => {
  el.style.display = display;
};

const renderMovie = (movie, root) => {
  const movieCard = `
    <a href="./movie?title=${movie.title.replace(/\s+/g, "")}&id=${
    movie.id
  }" class="movie_card">
  <div class="img"><img
      src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
      onerror='this.src="https://ativaembyplex.com/oxoo/app/src/main/res/drawable/poster_placeholder.png"'
      /></div>
      <div class="rate">
      <i class="fas fa-star"></i>
      <small>${movie.vote_average}</small>
      </div>
      <span class="title">${movie.title}</span>
      <span class="date">(${(movie.release_date || "").substring(0, 4)})</span>
      </a>
      `;
  root.insertAdjacentHTML("beforeend", movieCard);
};

const renderTVShow = (TVShow, root) => {
  const TVCard = `
    <a href="./series?title=${TVShow.name.replace(/\s+/g, "")}&id=${
    TVShow.id
  }" class="movie_card">
  <div class="img">
    <img
      src="https://image.tmdb.org/t/p/w300${TVShow.poster_path}"
      onerror='this.src="https://ativaembyplex.com/oxoo/app/src/main/res/drawable/poster_placeholder.png"'
    /></div>
    <div class="rate">
      <i class="fas fa-star"></i>
      <small>${TVShow.vote_average}</small>
    </div>
    <span class="title">${TVShow.name}</span>
    <span class="date">(${(TVShow.first_air_date || "").substring(0, 4)})</span>
  </a>
    `;
  root.insertAdjacentHTML("beforeend", TVCard);
};

const renderResult = async (url) => {
  notfound.style.display = "none";
  loader(searchLoader, "block");
  form.querySelector("input").value = q;
  const data = await fetchAPI(url);
  if (data.results.length == 0) notfound.style.display = "block";
  else {
    data.results.forEach((media) => {
      if (media.media_type == "tv") renderTVShow(media, content);
      else if (media.media_type == "movie") renderMovie(media, content);
    });
  }
  console.log(page, data);
  loader(searchLoader, "none");
  loader(pageLoader, "none");
  if (data.total_pages <= page) moreBtn.style.display = "none";
};

moreBtn.addEventListener("click", () => {
  page++;
  loader(searchLoader, "block");
  renderResult(
    `https://api.themoviedb.org/3/search/multi?query=${q}&page=${page}&`
  );
});

renderResult(`https://api.themoviedb.org/3/search/multi?query=${q}&page=${1}&`);
