/* Función que filtra toda la data respecto a un nombre y las muestra */
function getMoviesByName(searchText){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
    .then((response)=>{
      let movies =response.data.Search;
      let showMovies = document.getElementById('show-movies');
      document.getElementById("show-movies").style.display="block";
      showMovies.innerHTML = '';
    $.each(movies, (index,movie) => {
      let idMovie = movie.imdbID;
      showMovies.innerHTML += `
        <div class="col s12 m6 l4">
          <div class="card horizontal" id="card-horizontal">
            <div class="card-image">
              <img id="image" src="${movie.Poster}">
            </div>
            <div class="card-stacked">
              <div class="card-content" id="card-sum">
                <div id= "title-movie" class="header"><h6 class="truncatered">${movie.Title}</h6></div>
                <span id="`+ idMovie +`"> </span>
              </div>
              <div class="card-action">
                <a id="more-detail" class="modal-trigger btn-floating btn-large waves-effect waves-light yellow-btn" onclick="getMovieById('`+idMovie+`')" href="#modal1"><i class="material-icons">add</i></a>
              </div>
            </div>
          </div>
        </div>
        `
        getRating(idMovie);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  } 
