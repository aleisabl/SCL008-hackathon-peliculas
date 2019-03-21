const card = document.getElementById('card');
const url = 'http://www.omdbapi.com/?apikey=6faa8fa5&s=';

document.getElementById('search-btn').addEventListener('click' , () => {
    
    let search = document.getElementById('search').value;
    document.getElementById('screen1').setAttribute('hidden', true);

    
    fetch(url + search)

    .then (data => data.json())
    .then (data => {
        console.log(data);
        searchData = data.Search;
        console.log(data)
        for(let i=0; i<searchData.length; i++){
            card.innerHTML +=
            ` 
        <div data-toggle="modal" data-target="#exampleModal${searchData[i].imdbID}" class="card" style="width: 12rem;">
        <a href="#"><img id="poster" class="card-img-top" src=" ${searchData[i].Poster}" alt="card poster" onerror="this.src='img/imagenotfound.png';" ></a>
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
        <p class="movie-lang"> <strong>Language:</strong> ${searchData[i].Language}</p>
        <p class="movie-riuntime"> <strong>Runtime:</strong> ${searchData[i].Runtime} </p>
        <p class="movie-awards"> <strong>Awards:</strong> ${searchData[i].Awards} ${searchData[i].Released}</p>
        <p class="movie-released"> <strong>Release date:</strong> ${searchData[i].Released}</p>
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

document.getElementById('search-btn').addEventListener('click', () => {
    let condition = document.getElementById('search').value;
    document.getElementById('screen1').setAttribute('hidden', true);
    getData(condition)
})

