const card = document.getElementById('card');
const url = 'https://www.omdbapi.com/?apikey=6faa8fa5&s=';

document.getElementById('search-btn').addEventListener('click', () => {

    let search = document.getElementById('search').value;
    document.getElementById('screen1').setAttribute('hidden', true);


    fetch(url + search)

        .then(data => data.json())
        .then(data => {
            console.log(data);
            searchData = data.Search;
            for (let i = 0; i < searchData.length; i++) {
                card.innerHTML +=
                    ` 
        <div data-toggle="modal" data-target="#exampleModal${searchData[i].imdbID}" class="card" style="width: 12rem;">
        <a href="#"><img id="poster" class="card-img-top" src=" ${searchData[i].Poster}" alt="card poster" onerror="this.src='img/imagenotfound.jpg';" ></a>
        <h3 class="card-title"> <strong> ${searchData[i].Title}</strong></h3>
        <div class="card-body">
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${searchData[i].imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> ${searchData[i].Title} </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <p class="movie-genre"> <strong>Year:</strong> ${searchData[i].Year} </p>
        <p class="movie-lang"> <strong>Type:</strong> ${searchData[i].Type}</p>
        <p class="movie-riuntime"> <strong>imdbID:</strong> ${searchData[i].imdbID} </p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>
       
        `

            }
        })

})

