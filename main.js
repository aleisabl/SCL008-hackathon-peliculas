const card = document.getElementById('card');
const url = 'http://www.omdbapi.com/?apikey=6faa8fa5&t=';


const getData = (condition) => {
    fetch(url + condition)
    .then(resp => { return resp.json(); })
    .then(data => {

        card.innerHTML +=

        ` 
        <div data-toggle="modal" data-target="#exampleModal" class="card" style="width: 12rem;">
        <a href="#"><img id="poster" class="card-img-top" src=" ${data.Poster}" alt="card poster"></a>
        <h3 class="card-title"> <strong> ${data.Title}</strong></h3>
        <div class="card-body">
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> ${data.Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <p class="movie-genre"> <strong>Genre:</strong> ${data.Genre} </p>
        <p class="movie-lang"> <strong>Language:</strong> ${data.Language}</p>
        <p class="movie-riuntime"> <strong>Runtime:</strong> ${data.Runtime} </p>
        <p class="movie-awards"> <strong>Awards:</strong> ${data.Awards} ${data.Released}</p>
        <p class="movie-released"> <strong>Release date:</strong> ${data.Released}</p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>
        `

            /* data.forEach(element => {
                card.innerHTML +=

                    `   
                    <div class="card" style="width: 13rem;">
                    <img class="card-img-top" src="${element.Poster}" alt="poster">
                    <div class="card-body">
                    <p class="card-text">${element.Genre}|${element.Runtime}|${element.Released}</p>
                    <h5 class="card-title"></h5>
                    <p class="card-text">${element.Title}</p>
                    <a href="#" class="btn btn-secondary">Ver más</a>

                    </div>

                    `

                })         */
        });
    }



    document.getElementById('search-btn').addEventListener('click', () => {
        let condition = document.getElementById('search').value;
        document.getElementById('screen1').setAttribute('hidden', true);
        getData(condition)
    })