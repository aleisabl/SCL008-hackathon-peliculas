const card = document.getElementById('card');
let condition = document.getElementById('search-input').value;
/* let url = 'http://www.omdbapi.com/?apikey=6faa8fa5&s=' + condition;
 */
const getData = () => {

    fetch('http://www.omdbapi.com/?apikey=6faa8fa5&s=Batman')
        .then(resp => {
            return resp.json();
        })

        .then(function (data) {
            console.log(data)

            document.getElementById('search-btn').addEventListener('click', () => {

                card.innerHTML =

                `   
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${JSON.stringify(data).Poster}" alt="poster">
                <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">${JSON.stringify(data)}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                
                `

            }) 

            
        })

        .catch(error => error)

}

window.onload = getData();
