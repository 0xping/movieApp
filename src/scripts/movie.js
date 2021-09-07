import "../styles/main.scss";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const auth = "api_key=69dbec5271cc7d3bb6d05f72fb3b88e3";
const mainMovie = document.querySelector(".main_movie > div");
const overview = document.querySelector(".overview p");
const trailer = document.querySelector(".trailer .video");
const cast = document.querySelector("#cast .movies");
const similarMovies = document.querySelector("#similarMovies .movies");
const arrowButtons = document.querySelectorAll(".btn-arrow");
var isoLangs = {
  ab: { name: "Abkhaz" },
  aa: { name: "Afar" },
  af: { name: "Afrikaans" },
  ak: { name: "Akan" },
  sq: { name: "Albanian" },
  am: { name: "Amharic" },
  ar: { name: "Arabic" },
  an: { name: "Aragonese" },
  hy: { name: "Armenian" },
  as: { name: "Assamese" },
  av: { name: "Avaric" },
  ae: { name: "Avestan" },
  ay: { name: "Aymara" },
  az: { name: "Azerbaijani" },
  bm: { name: "Bambara" },
  ba: { name: "Bashkir" },
  eu: { name: "Basque" },
  be: { name: "Belarusian" },
  bn: { name: "Bengali" },
  bh: { name: "Bihari" },
  bi: { name: "Bislama" },
  bs: { name: "Bosnian" },
  br: { name: "Breton" },
  bg: { name: "Bulgarian" },
  my: { name: "Burmese" },
  ca: { name: "Catalan; Valencian" },
  ch: { name: "Chamorro" },
  ce: { name: "Chechen" },
  ny: { name: "Chichewa; Chewa; Nyanja" },
  zh: { name: "Chinese" },
  cv: { name: "Chuvash" },
  kw: { name: "Cornish" },
  co: { name: "Corsican" },
  cr: { name: "Cree" },
  hr: { name: "Croatian" },
  cs: { name: "Czech" },
  da: { name: "Danish" },
  dv: { name: "Divehi; Dhivehi; Maldivian;" },
  nl: { name: "Dutch" },
  en: { name: "English" },
  eo: { name: "Esperanto" },
  et: { name: "Estonian" },
  ee: { name: "Ewe" },
  fo: { name: "Faroese" },
  fj: { name: "Fijian" },
  fi: { name: "Finnish" },
  fr: { name: "French" },
  ff: { name: "Fula; Fulah; Pulaar; Pular" },
  gl: { name: "Galician" },
  ka: { name: "Georgian" },
  de: { name: "German" },
  el: { name: "Greek, Modern" },
  gn: { name: "Guaraní" },
  gu: { name: "Gujarati" },
  ht: { name: "Haitian; Haitian Creole" },
  ha: { name: "Hausa" },
  he: { name: "Hebrew (modern)" },
  hz: { name: "Herero" },
  hi: { name: "Hindi" },
  ho: { name: "Hiri Motu" },
  hu: { name: "Hungarian" },
  ia: { name: "Interlingua" },
  id: { name: "Indonesian" },
  ie: { name: "Interlingue" },
  ga: { name: "Irish" },
  ig: { name: "Igbo" },
  ik: { name: "Inupiaq" },
  io: { name: "Ido" },
  is: { name: "Icelandic" },
  it: { name: "Italian" },
  iu: { name: "Inuktitut" },
  ja: { name: "Japanese" },
  jv: { name: "Javanese" },
  kl: { name: "Kalaallisut, Greenlandic" },
  kn: { name: "Kannada" },
  kr: { name: "Kanuri" },
  ks: { name: "Kashmiri" },
  kk: { name: "Kazakh" },
  km: { name: "Khmer" },
  ki: { name: "Kikuyu, Gikuyu" },
  rw: { name: "Kinyarwanda" },
  ky: { name: "Kirghiz, Kyrgyz" },
  kv: { name: "Komi" },
  kg: { name: "Kongo" },
  ko: { name: "Korean" },
  ku: { name: "Kurdish" },
  kj: { name: "Kwanyama, Kuanyama" },
  la: { name: "Latin" },
  lb: { name: "Luxembourgish, Letzeburgesch" },
  lg: { name: "Luganda" },
  li: { name: "Limburgish, Limburgan, Limburger" },
  ln: { name: "Lingala" },
  lo: { name: "Lao" },
  lt: { name: "Lithuanian" },
  lu: { name: "Luba-Katanga" },
  lv: { name: "Latvian" },
  gv: { name: "Manx" },
  mk: { name: "Macedonian" },
  mg: { name: "Malagasy" },
  ms: { name: "Malay" },
  ml: { name: "Malayalam" },
  mt: { name: "Maltese" },
  mi: { name: "Māori" },
  mr: { name: "Marathi (Marāṭhī)" },
  mh: { name: "Marshallese" },
  mn: { name: "Mongolian" },
  na: { name: "Nauru" },
  nv: { name: "Navajo, Navaho" },
  nb: { name: "Norwegian" },
  nd: { name: "North Ndebele" },
  ne: { name: "Nepali" },
  ng: { name: "Ndonga" },
  nn: { name: "Norwegian Nynorsk" },
  no: { name: "Norwegian" },
  ii: { name: "Nuosu" },
  nr: { name: "South Ndebele" },
  oc: { name: "Occitan" },
  oj: { name: "Ojibwe, Ojibwa" },
  om: { name: "Oromo" },
  or: { name: "Oriya" },
  os: { name: "Ossetian, Ossetic" },
  pa: { name: "Panjabi, Punjabi" },
  pi: { name: "Pāli" },
  fa: { name: "Persian" },
  pl: { name: "Polish" },
  ps: { name: "Pashto, Pushto" },
  pt: { name: "Portuguese" },
  qu: { name: "Quechua" },
  rm: { name: "Romansh" },
  rn: { name: "Kirundi" },
  ro: { name: "Romanian, Moldavian, Moldovan" },
  ru: { name: "Russian" },
  sa: { name: "Sanskrit (Saṁskṛta)" },
  sc: { name: "Sardinian" },
  sd: { name: "Sindhi" },
  se: { name: "Northern Sami" },
  sm: { name: "Samoan" },
  sg: { name: "Sango" },
  sr: { name: "Serbian" },
  gd: { name: "Scottish Gaelic; Gaelic" },
  sn: { name: "Shona" },
  si: { name: "Sinhala, Sinhalese" },
  sk: { name: "Slovak" },
  sl: { name: "Slovene" },
  so: { name: "Somali" },
  st: { name: "Southern Sotho" },
  es: { name: "Spanish" },
  su: { name: "Sundanese" },
  sw: { name: "Swahili" },
  ss: { name: "Swati" },
  sv: { name: "Swedish" },
  ta: { name: "Tamil" },
  te: { name: "Telugu" },
  tg: { name: "Tajik" },
  th: { name: "Thai" },
  ti: { name: "Tigrinya" },
  bo: { name: "Tibetan Standard, Tibetan, Central" },
  tk: { name: "Turkmen" },
  tl: { name: "Tagalog" },
  tn: { name: "Tswana" },
  to: { name: "Tonga (Tonga Islands)" },
  tr: { name: "Turkish" },
  ts: { name: "Tsonga" },
  tt: { name: "Tatar" },
  tw: { name: "Twi" },
  ty: { name: "Tahitian" },
  ug: { name: "Uighur, Uyghur" },
  uk: { name: "Ukrainian" },
  ur: { name: "Urdu" },
  uz: { name: "Uzbek" },
  ve: { name: "Venda" },
  vi: { name: "Vietnamese" },
  vo: { name: "Volapük" },
  wa: { name: "Walloon" },
  cy: { name: "Welsh" },
  wo: { name: "Wolof" },
  fy: { name: "Western Frisian" },
  xh: { name: "Xhosa" },
  yi: { name: "Yiddish" },
  yo: { name: "Yoruba" },
  za: { name: "Zhuang, Chuang" },
};

const form = document.querySelector(".search");
const search = (q) => {
  if(form.querySelector("input").value.trim()!="") window.open(`./search?q=${q}`, "_self");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search(form.querySelector("input").value);
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
    <div class="img"><img
      src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
      onerror='this.src="https://ativaembyplex.com/oxoo/app/src/main/res/drawable/poster_placeholder.png"'

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

const getMovies = async (url, root) => {
  const data = await fetchAPI(url);
  data.results.forEach((movie) => {
    renderMovie(movie, root);
  });
};

const loader = document.querySelector(".loaderContainer");
const hideLoader = () => {
  console.log(loader);
  loader.style.display = "none";
};

const renderMovieInfo = async () => {
  let data = await fetchAPI(`https://api.themoviedb.org/3/movie/${id}?`);
  const videos = await fetchAPI(
    `https://api.themoviedb.org/3/movie/${id}/videos?`
  );
  const credits = await fetchAPI(
    `https://api.themoviedb.org/3/movie/${id}/credits?`
  );

  console.log(credits);

  document.title = data.title;
  mainMovie.innerHTML = `
  <h1>
  ${data.title}<small
    >(${(data.release_date || data.first_air_date).substring(0, 4)})</small
  >
</h1>

<div class="img">
  <img
    src="https://image.tmdb.org/t/p/w500${data.poster_path}"
    onerror='this.src="https://ativaembyplex.com/oxoo/app/src/main/res/drawable/poster_placeholder.png"'
  />
</div>
<table>
  <tr>
    <th>Language . Country</th>
    <td>
      ${isoLangs[data.original_language].name} .
      ${data.production_countries
        .map(
          (el) => `
      <span
        class="flag-icon flag-icon-${el.iso_3166_1.toLowerCase()}"
      ></span
      >${el.name}`
        )
        .join()}
    </td>
  </tr>
  <tr>
    <th>adult</th>
    <td>${data.adult ? "yes" : "no"}</td>
  </tr>
  <tr>
    <th>Genres</th>
    <td>${data.genres.map((el) => el.name).join(" || ")}</td>
  </tr>
  <tr>
    <th>Rating</th>
    <td>
      <i class="fas fa-star"></i>
      ${data.vote_average}/10 . ${data.vote_count} vote
    </td>
  </tr>
  <tr>
    <th>Duration</th>
    <td>
      ${
        data.runtime < 60
          ? data.runtime + " minutes"
          : Math.trunc(data.runtime / 60) +
            " h " +
            Math.trunc(
              (data.runtime / 60 - Math.trunc(data.runtime / 60)) * 60
            ) +
            " minutes"
      }
    </td>
  </tr>
</table>
    `;

  overview.innerHTML = data.overview;

  if (videos.results.length != 0) {
    trailer.setAttribute(
      "src",
      "https://www.youtube.com/embed/" + videos.results[0].key
    );
  } else {
    trailer.setAttribute("src", "https://www.youtube.com/embed/XXXX");
  }
  credits.cast.forEach((actor) => {
    console.log(actor);
    cast.innerHTML += `
    <a href="./actor?id=${actor.id}" class="actor">
    <div class="img"><img src="https://image.tmdb.org/t/p/w300${actor.profile_path}" onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwR0zp3hO954IIGCc95tluktFjs-ILRephKhcg-AAgA5y-IEgcoDhGG1QoK8WlpVy-ivI&usqp=CAU'" height="210px"></div>
              <h3>${actor.name}</h3>
              <span>${actor.character}</span>
            </a>
    `;
  });
  hideLoader();
};

getMovies(`https://api.themoviedb.org/3/movie/${id}/similar?`, similarMovies);

renderMovieInfo();
