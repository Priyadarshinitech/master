let movie = document.querySelector("#movie-list");
let row = document.createElement("div");
row.classList = "row mt-3";
movie.appendChild(row);

let nowPlaying = document.querySelector("#now-playing");
nowPlaying.addEventListener("click", nowPlayingMovie);

let popular = document.querySelector("#popular");
popular.addEventListener("click", popularMovie);

let topRated = document.querySelector("#top-rated");
topRated.addEventListener("click", topRatedMovie);

let upComing  = document.querySelector("#upcoming");
upComing.addEventListener("click", upComingMovie);


function nowPlayingMovie(event){
    let category = "now_playing";
    getMovieList(category);
    let navLink = document.querySelector(".nav-link.active");
    navLink.classList.remove("active");
    event.target.classList.add("active");
    let categoryTitle = document.querySelector(".category-title");
    categoryTitle.innerText = ("Now Playing Movies");

}

function popularMovie(event){
    let category = "popular";
    getMovieList(category);
    let navLink = document.querySelector(".nav-link.active");
    navLink.classList.remove("active");
    event.target.classList.add("active");
    let categoryTitle = document.querySelector(".category-title");
    categoryTitle.innerText = ("Popular Movies");


}

function topRatedMovie(event){
    let category = "top_rated";
    getMovieList(category);
    let navLink = document.querySelector(".nav-link.active");
    navLink.classList.remove("active");
    event.target.classList.add("active");
    let categoryTitle = document.querySelector(".category-title");
    categoryTitle.innerText = ("Top Rated Movies");

}

function upComingMovie(event){
    let category = "upcoming";
    getMovieList(category);
    let navLink = document.querySelector(".nav-link.active");
    navLink.classList.remove("active");
    event.target.classList.add("active");
    let categoryTitle = document.querySelector(".category-title");
    categoryTitle.innerText = ("Upcoming Movies");

}


function getMovieList(category){ 
    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    fetch("https://api.themoviedb.org/3/movie/" + category + "?api_key=d66e642f707f542e1ffaf7aebdbec6b0")
        .then(response =>{
            loader.style.display = "none";
           return response.json();
        })
        .then(data =>{
            let results = data['results'];
            let row = document.querySelector(".row");
            row.innerHTML = "";

            for (let item of results){
                addMovieItem(item);

            }


        })
}

getMovieList("now_playing");

function addMovieItem(item){
    let imageMain = document.createElement("div");
    imageMain.classList = "col-3 my-4 percentage-main-position";
    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = "http://image.tmdb.org/t/p/w300" + item['poster_path'];
    imageDiv.appendChild(image);
    let percentageDiv = document.createElement("div");
    percentageDiv.className = "percentage-position";
    let spanPercentage = document.createElement("span");
    spanPercentage.classList = "border p-1 rounded-circle percentage-background";
    spanPercentage.innerText = item['vote_average'];
    percentageDiv.appendChild(spanPercentage);
    let movieName = document.createElement("div");
    movieName.classList = "col-10 movie-name mt-1"
    let movieTitle = document.createElement("h5");
    movieTitle.innerText = item['title']
    movieName.appendChild(movieTitle);
    let dateDiv = document.createElement("div");
    dateDiv.className = "date";
    let spanDate = document.createElement("span");
    spanDate.innerText = item['release_date'];
    dateDiv.appendChild(spanDate);
    imageMain.appendChild(imageDiv);
    imageMain.appendChild(percentageDiv);
    imageMain.appendChild(movieName);
    imageMain.appendChild(dateDiv);
    row.appendChild(imageMain);

}

