import "../styles/main.scss";


const auth = "api_key=69dbec5271cc7d3bb6d05f72fb3b88e3";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const arrowButtons = document.querySelectorAll(".btn-arrow");
const mainMovie = document.querySelector(".main_movie > div");
const overview = document.querySelector(".overview p");
const MovieContainer = document.querySelector("#movie .movies");
const TVContainer = document.querySelector("#tv .movies");
const form = document.querySelector(".search");
const search = (q) => {
  window.open(`./search?q=${q}`, "_self");
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(form.querySelector("input").value.trim()!="") search(form.querySelector("input").value);
});

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

const fetchAPI = async (url) => {
  const data = await fetch(url + auth)
    .then((respond) => respond.json())
    .then((data) => data);
  return data;
};

const renderMovie = (movie, root) => {
  const movieCard = `
      <a href="./movie?title=${movie.original_title.replace(
        /\s+/g,
        ""
      )}&id=${movie.id}" class="movie_card">
      <div class="img">
      <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
      onerror='this.src="https://critics.io/img/movies/poster-placeholder.png"'

      /></div>
      <div class="rate">
        <i class="fas fa-star"></i>
        <small>${movie.vote_average}</small>
      </div>
      <span class="title">${movie.original_title}</span>
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
    <span class="date">(${TVShow.first_air_date.substring(0, 4)})</span>
  </a>
    `;
  root.insertAdjacentHTML("beforeend", TVCard);
};

const getTVShow = async (url, root) => {
  const data = await fetchAPI(url);
  data.cast.forEach((TVShow) => {
    renderTVShow(TVShow, root);
  });
};

const getMovies = async (url, root) => {
  const data = await fetchAPI(url);
  console.log(data);
  data.cast.forEach((movie) => {
    renderMovie(movie, root);
  });
};

const loader = document.querySelector(".loaderContainer");
const hideLoader = () => {
  console.log(loader);
  loader.style.display = "none";
};

const f = async () => {
  const data = await fetchAPI(`https://api.themoviedb.org/3/person/${id}?`);
  console.log(data);
  mainMovie.innerHTML = `
  <div class="img">
        <img
          src="https://image.tmdb.org/t/p/w500${data.profile_path}"
          onerror='this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwR0zp3hO954IIGCc95tluktFjs-ILRephKhcg-AAgA5y-IEgcoDhGG1QoK8WlpVy-ivI&usqp=CAU"'
        />
      </div>
      <table>
        <tr>
          <th>name</th>
          <td>${data.name}</td>
        </tr>
        <tr>
          <th>Known For</th>
          <td>${data.known_for_department}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>${data.gender == 1 ? "female" : "male"}</td>
        </tr>
        <tr>
          <th>Birthday</th>
          <td>${data.birthday}</td>
        </tr>
        <tr>
          <th>Place of Birth</th>
          <td>${data.place_of_birth}</td>
        </tr>
      </table>
  `;
  overview.innerHTML = data.biography;
  getMovies(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?`,
    MovieContainer
  );
  getTVShow(
    `https://api.themoviedb.org/3/person/${id}/tv_credits?`,
    TVContainer
  );
  hideLoader();
};
f();

/*
https://api.themoviedb.org/3/person/${id}?
   https://api.themoviedb.org/3/person/${id}/movie_credits?
   https://api.themoviedb.org/3/person/${id}/tv_credits?

*/
