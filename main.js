const card = document.getElementById('card');
const url = 'http://www.omdbapi.com/?apikey=6faa8fa5&s=';

document.getElementById('search-btn').addEventListener('click' , () => {
    
    let search = document.getElementById('search').value;
    document.getElementById('screen1').setAttribute('hidden', true);

    
    fetch(url + search)

    .then (data => data.json())
    .then (data => {
        searchData = data.Search;
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
        <p class="movie-genre"> <strong>Genre:</strong> ${searchData[i].Genre} </p>
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


/* const getData = (condition) => {
    fetch(url + condition)
    .then(resp => { return resp.json(); })
    .then(data => {


        for (let i=0; i<data.length; i++) {

            card.innerHTML +=

        ` 
        <div data-toggle="modal" data-target="#exampleModal" class="card" style="width: 12rem;">
        <a href="#"><img id="poster" class="card-img-top" src=" ${searchData[i].Poster}" alt="card poster"></a>
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

        }

    });

} */

/* 
>>>>>>> bc8ccf3e08d34a7a69b0697c4854b750b35ec0ac
document.getElementById('search-btn').addEventListener('click', () => {
    let condition = document.getElementById('search').value;
    document.getElementById('screen1').setAttribute('hidden', true);
    getData(condition)
<<<<<<< HEAD
})


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
<<<<<<< Updated upstream

<<<<<<< HEAD
                })         */
        });
}



document.getElementById('search-btn').addEventListener('click', () => {
    let condition = document.getElementById('search').value;
    document.getElementById('screen1').setAttribute('hidden', true);
    getData(condition)
})


