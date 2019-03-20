const card = document.getElementById('card');

/* let url = 'http://www.omdbapi.com/?apikey=6faa8fa5&s=' + condition;
 */
const getData = () => {

    let condition = document.getElementById('search').value;

    fetch('http://www.omdbapi.com/?apikey=6faa8fa5&t=The')
        .then(resp => { return resp.json(); })

        .then(data => {
            console.log(data)

            document.getElementById('search-btn').addEventListener('click', () => {

                document.getElementById('screen1').setAttribute('hidden', true);

                card.innerHTML = "";
                card.innerHTML +=

                `   
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${data.Poster}" alt="poster">
                <div class="card-body">
                <p class="card-text">${JSON.stringify(data.Genre)}|${JSON.stringify(data.Runtime)}|${JSON.stringify(data.Released)}</p>
                <h5 class="card-title"></h5>
                <p class="card-text">${JSON.stringify(data.Title)}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
                </div>
                
                `

            }) 
            
        });

}

/* let getData = () => {
    fetch('http://www.omdbapi.com/?apikey=6faa8fa5&t=Batman').then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)

        card.innerHTML += JSON.stringify(data.Poster);

    })
}
*/

window.onload = getData(); 