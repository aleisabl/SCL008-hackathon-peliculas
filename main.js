const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6faa8fa5";
const card = document.getElementById('card');

const getData = () => {

    fetch(url)
        .then(resp => {
            return resp.json();
        })

        .then(function (data) {
            console.log(data);
            showData()
        })

        .catch(error => error)
}

window.onload = getData;

/* const showData = (data) => {
    for (let i = 0; i < data.length; i++) {
        card.innerHTML += `<div data-toggle="modal" data-target="#exampleModal" class="card" style= "width: 8rem;">
      <div class= "card-name">
      <p> ${data[i].Title}</p>
      <a href="#"><img class= "card-img-top" src="${data[i].Poster}" alt="Card image cap"></a>
      <p class="pokemon-name"> ${data[i].Genre}</p>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
      <div>
      </div>
      <div>
      <h5 class="modal-title" id="exampleModalLabel">${data[i].Title}</h5>
      <img  class = "pokemon-modal-img" src="${data[i].Poster}" alt="modal img">
      </div>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div class="modal-body">
      <p class="pokemon-type"> <strong>Tipos:</strong> ${data[i].Type} </p>
      <p class="pokemon-weaknesses"> <strong>Debilidades:</strong> ${data[i].Awards} </p>
      <p class="pokemon-candy"> <strong>Caramelo:</strong> ${data[i].candy_count} ${data[i].Score}</p>
      <p class="pokemon-egg"> <strong>Distancia de huevo:</strong> ${data[i].Genre} </p>
      <img id="egg-img" src= "img/egg.png" alt="egg img">
      <img id="egg-img" src= "img/Bulbasaur_candy.png" alt="candy img">
      </div>
      <div class="modal-footer">
      <button type="button" class="see-more">Cerrar</button>
      </div>
      </div>
      </div>
      </div>`

    }
} */




